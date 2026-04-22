import type { FastifyPluginAsync } from "fastify";
import { Type } from "@sinclair/typebox";
import { prisma } from "../../lib/prisma.js";
import { sendError } from "../../lib/errors.js";
import { accessTokenOptions, refreshTokenOptions } from "../../lib/auth.js";

function nowPlusDays(days: number) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
}

export const authRoutes: FastifyPluginAsync = async (app) => {
  app.post(
    "/device",
    {
      schema: {
        summary: "Register/lookup a device and issue tokens",
        body: Type.Object({
          deviceId: Type.String({ minLength: 8, maxLength: 128 }),
          platform: Type.String({ minLength: 2, maxLength: 32 }),
        }),
        response: {
          200: Type.Object({
            userId: Type.String(),
            name: Type.Union([Type.String(), Type.Null()]),
            deviceId: Type.String(),
            accessToken: Type.String(),
            refreshToken: Type.String(),
          }),
        },
      },
    },
    async (request) => {
      const { deviceId, platform } = request.body as { deviceId: string; platform: string };

      // Idempotent: same deviceId returns the same user (users are keyed by deviceId).
      const user = await prisma.user.upsert({
        where: { id: deviceId },
        update: { platform, lastSeenAt: new Date() },
        create: { id: deviceId, platform },
        select: { id: true, name: true },
      });
      const userId = user.id;

      const refreshJti = crypto.randomUUID();
      const refreshExpiresAt = nowPlusDays(30);
      await prisma.refreshToken.create({
        data: {
          jti: refreshJti,
          expiresAt: refreshExpiresAt,
          userId,
        },
      });

      const accessToken = await app.jwt.sign(
        { sub: userId, typ: "access", jti: crypto.randomUUID() },
        accessTokenOptions(),
      );
      const refreshToken = await app.jwt.sign(
        { sub: userId, typ: "refresh", jti: refreshJti },
        refreshTokenOptions(),
      );

      return { userId, name: user.name, deviceId, accessToken, refreshToken };
    },
  );

  app.post(
    "/refresh",
    {
      schema: {
        summary: "Rotate refresh token and issue a new access token",
        body: Type.Object({
          refreshToken: Type.String({ minLength: 20 }),
        }),
        response: {
          200: Type.Object({
            accessToken: Type.String(),
            refreshToken: Type.String(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { refreshToken } = request.body as { refreshToken: string };

      let payload: { sub: string; typ: string; jti: string };
      try {
        payload = (await app.jwt.verify(refreshToken)) as any;
      } catch {
        return sendError(reply, 401, "UNAUTHORIZED", "Invalid refresh token");
      }
      if (payload.typ !== "refresh") {
        return sendError(reply, 401, "UNAUTHORIZED", "Invalid token type");
      }

      const tokenRow = await prisma.refreshToken.findUnique({
        where: { jti: payload.jti },
        select: { revokedAt: true, expiresAt: true, userId: true },
      });
      if (!tokenRow) return sendError(reply, 401, "UNAUTHORIZED", "Refresh token not found");
      if (tokenRow.revokedAt) return sendError(reply, 401, "UNAUTHORIZED", "Refresh token revoked");
      if (tokenRow.expiresAt.getTime() < Date.now())
        return sendError(reply, 401, "UNAUTHORIZED", "Refresh token expired");
      if (tokenRow.userId !== payload.sub) {
        return sendError(reply, 401, "UNAUTHORIZED", "Refresh token mismatch");
      }

      // Rotate: revoke old token and issue a new one.
      await prisma.refreshToken.update({
        where: { jti: payload.jti },
        data: { revokedAt: new Date() },
      });

      const newJti = crypto.randomUUID();
      const newExpiresAt = nowPlusDays(30);
      await prisma.refreshToken.create({
        data: { jti: newJti, expiresAt: newExpiresAt, userId: payload.sub },
      });

      const accessToken = await app.jwt.sign(
        { sub: payload.sub, typ: "access", jti: crypto.randomUUID() },
        accessTokenOptions(),
      );
      const newRefreshToken = await app.jwt.sign(
        { sub: payload.sub, typ: "refresh", jti: newJti },
        refreshTokenOptions(),
      );

      return { accessToken, refreshToken: newRefreshToken };
    },
  );

  app.post(
    "/logout",
    {
      schema: {
        summary: "Revoke a refresh token",
        body: Type.Object({
          refreshToken: Type.String({ minLength: 20 }),
        }),
        response: {
          200: Type.Object({ ok: Type.Boolean() }),
        },
      },
    },
    async (request, reply) => {
      const { refreshToken } = request.body as { refreshToken: string };
      let payload: { typ: string; jti: string };
      try {
        payload = (await app.jwt.verify(refreshToken)) as any;
      } catch {
        return sendError(reply, 401, "UNAUTHORIZED", "Invalid refresh token");
      }
      if (payload.typ !== "refresh") return sendError(reply, 401, "UNAUTHORIZED", "Invalid token type");

      await prisma.refreshToken.updateMany({
        where: { jti: payload.jti, revokedAt: null },
        data: { revokedAt: new Date() },
      });
      return { ok: true };
    },
  );
};

