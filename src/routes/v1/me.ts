import type { FastifyPluginAsync } from "fastify";
import { Type } from "@sinclair/typebox";
import { prisma } from "../../lib/prisma.js";
import { sendError } from "../../lib/errors.js";
import { UserNameSchema } from "./schemas.js";

export const meRoutes: FastifyPluginAsync = async (app) => {
  app.get(
    "/me",
    {
      preHandler: app.authenticate,
      schema: {
        summary: "Get current user",
        response: {
          200: Type.Object({
            id: Type.String(),
            name: Type.Union([Type.String(), Type.Null()]),
            createdAt: Type.String(),
            updatedAt: Type.String(),
          }),
        },
      },
    },
    async (request, reply) => {
      const auth = request.auth;
      if (!auth) return sendError(reply, 401, "UNAUTHORIZED", "Unauthorized");

      const user = await prisma.user.findUnique({
        where: { id: auth.userId },
        select: { id: true, name: true, createdAt: true, updatedAt: true },
      });
      if (!user) return sendError(reply, 404, "NOT_FOUND", "User not found");

      return {
        id: user.id,
        name: user.name,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
      };
    },
  );

  app.put(
    "/me/name",
    {
      preHandler: app.authenticate,
      schema: {
        summary: "Save current user name",
        body: Type.Object({ name: UserNameSchema }),
        response: {
          200: Type.Object({
            id: Type.String(),
            name: Type.String(),
            updatedAt: Type.String(),
          }),
        },
      },
    },
    async (request, reply) => {
      const auth = request.auth;
      if (!auth) return sendError(reply, 401, "UNAUTHORIZED", "Unauthorized");

      const { name } = request.body as { name: string };
      const normalizedName = name.trim();
      if (normalizedName.length < 2 || normalizedName.length > 16) {
        return sendError(reply, 400, "BAD_REQUEST", "Name must be 2..16 characters");
      }

      const user = await prisma.user.update({
        where: { id: auth.userId },
        data: { name: normalizedName },
        select: { id: true, name: true, updatedAt: true },
      });

      return { id: user.id, name: user.name!, updatedAt: user.updatedAt.toISOString() };
    },
  );

  app.delete(
    "/me",
    {
      preHandler: app.authenticate,
      schema: {
        summary: "Delete current user",
        response: { 200: Type.Object({ ok: Type.Boolean() }) },
      },
    },
    async (request, reply) => {
      const auth = request.auth;
      if (!auth) return sendError(reply, 401, "UNAUTHORIZED", "Unauthorized");

      await prisma.refreshToken.updateMany({
        where: { userId: auth.userId, revokedAt: null },
        data: { revokedAt: new Date() },
      });
      await prisma.user.delete({ where: { id: auth.userId } });
      return { ok: true };
    },
  );
};

