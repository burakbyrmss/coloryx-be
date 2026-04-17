import type { FastifyPluginAsync } from "fastify";
import { Type } from "@sinclair/typebox";
import { prisma } from "../../lib/prisma.js";
import { sendError } from "../../lib/errors.js";
import { GameModeSchema } from "./schemas.js";

export const leaderboardsRoutes: FastifyPluginAsync = async (app) => {
  app.get(
    "/leaderboards",
    {
      schema: {
        summary: "Get leaderboard (best scores)",
        querystring: Type.Object({
          mode: GameModeSchema,
          limit: Type.Optional(Type.Integer({ minimum: 1, maximum: 100, default: 50 })),
          cursor: Type.Optional(Type.String()),
        }),
        response: {
          200: Type.Object({
            items: Type.Array(
              Type.Object({
                userId: Type.String(),
                bestScore: Type.Number(),
                updatedAt: Type.String(),
              }),
            ),
            nextCursor: Type.Union([Type.String(), Type.Null()]),
          }),
        },
      },
    },
    async (request) => {
      const { mode, limit = 50, cursor } = request.query as {
        mode: "ODD_ONE_OUT" | "REMEMBER_COLOR";
        limit?: number;
        cursor?: string;
      };
      const take = limit + 1;

      const rows = await prisma.leaderboardEntry.findMany({
        where: { mode },
        orderBy: [{ bestScore: "desc" }, { updatedAt: "asc" }, { id: "asc" }],
        take,
        ...(cursor
          ? {
              cursor: { id: cursor },
              skip: 1,
            }
          : {}),
        select: { id: true, userId: true, bestScore: true, updatedAt: true },
      });

      const hasMore = rows.length > limit;
      const page = hasMore ? rows.slice(0, limit) : rows;
      const nextCursor = hasMore ? page[page.length - 1]!.id : null;

      return {
        items: page.map((r: { userId: string; bestScore: number; updatedAt: Date }) => ({
          userId: r.userId,
          bestScore: r.bestScore,
          updatedAt: r.updatedAt.toISOString(),
        })),
        nextCursor,
      };
    },
  );

  app.get(
    "/leaderboards/me",
    {
      preHandler: app.authenticate,
      schema: {
        summary: "Get my leaderboard entry for a mode",
        querystring: Type.Object({ mode: GameModeSchema }),
        response: {
          200: Type.Object({
            mode: GameModeSchema,
            userId: Type.String(),
            bestScore: Type.Union([Type.Number(), Type.Null()]),
          }),
        },
      },
    },
    async (request, reply) => {
      const auth = request.auth;
      if (!auth) return sendError(reply, 401, "UNAUTHORIZED", "Unauthorized");
      const { mode } = request.query as any;

      const row = await prisma.leaderboardEntry.findUnique({
        where: { mode_userId: { mode, userId: auth.userId } },
        select: { bestScore: true },
      });

      return { mode, userId: auth.userId, bestScore: row?.bestScore ?? null };
    },
  );
};

