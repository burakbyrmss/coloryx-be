import type { FastifyPluginAsync } from "fastify";
import { Type } from "@sinclair/typebox";
import { prisma } from "../../lib/prisma.js";
import { sendError } from "../../lib/errors.js";

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
        select: { id: true, createdAt: true, updatedAt: true },
      });
      if (!user) return sendError(reply, 404, "NOT_FOUND", "User not found");

      return {
        id: user.id,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
      };
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

