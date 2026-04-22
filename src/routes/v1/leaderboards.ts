import type { FastifyPluginAsync } from "fastify";
import { Type } from "@sinclair/typebox";
import { prisma } from "../../lib/prisma.js";
import { sendError } from "../../lib/errors.js";
import { GameModeSchema } from "./schemas.js";

/** Neighbors on each side of the requested user (global leaderboard order, best first). */
const AROUND_ME_NEIGHBORS = 5;

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
                name: Type.String(),
                bestScore: Type.Number(),
                rank: Type.Integer({ minimum: 1 }),
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
      const names = await prisma.user.findMany({
        where: { id: { in: page.map((r) => r.userId) } },
        select: { id: true, name: true } as any,
      });
      const uniqueScores = [...new Set(page.map((r) => r.bestScore))];
      const betterCountPairs = await Promise.all(
        uniqueScores.map(async (score) => {
          const betterCount = await prisma.leaderboardEntry.count({
            where: { mode, bestScore: { gt: score } },
          });
          return [score, betterCount] as const;
        }),
      );
      const rankByScore = new Map<number, number>(
        betterCountPairs.map(([score, betterCount]) => [score, betterCount + 1]),
      );
      const nameByUserId = new Map<string, string | null>();
      for (const user of names as any[]) {
        if (typeof user?.id === "string") {
          nameByUserId.set(user.id, typeof user?.name === "string" ? user.name : null);
        }
      }

      return {
        items: page.map((r: { userId: string; bestScore: number; updatedAt: Date }) => ({
          userId: r.userId,
          name: nameByUserId.get(r.userId) ?? r.userId,
          bestScore: r.bestScore,
          rank: rankByScore.get(r.bestScore) ?? 1,
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
            name: Type.String(),
            bestScore: Type.Union([Type.Number(), Type.Null()]),
            rank: Type.Union([Type.Integer({ minimum: 1 }), Type.Null()]),
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
      const user = await prisma.user.findUnique({
        where: { id: auth.userId },
        select: { name: true } as any,
      });
      const rank =
        row?.bestScore == null
          ? null
          : (await prisma.leaderboardEntry.count({
              where: { mode, bestScore: { gt: row.bestScore } },
            })) + 1;

      return {
        mode,
        userId: auth.userId,
        name: (user as { name?: string | null } | null)?.name ?? auth.userId,
        bestScore: row?.bestScore ?? null,
        rank,
      };
    },
  );

  app.get(
    "/leaderboard/around-me",
    {
      schema: {
        summary:
          "Global rank for a user plus up to five leaderboard neighbors above and below (best score first; same rank rules as /leaderboards/me)",
        querystring: Type.Object({
          mode: GameModeSchema,
          userId: Type.String(),
        }),
        response: {
          200: Type.Object({
            mode: GameModeSchema,
            userId: Type.String(),
            rank: Type.Union([Type.Integer({ minimum: 1 }), Type.Null()]),
            items: Type.Array(
              Type.Object({
                mode: GameModeSchema,
                userId: Type.String(),
                name: Type.String(),
                bestScore: Type.Number(),
                rank: Type.Integer({ minimum: 1 }),
              }),
            ),
          }),
        },
      },
    },
    async (request) => {
      const { mode, userId } = request.query as {
        mode: "ODD_ONE_OUT" | "REMEMBER_COLOR";
        userId: string;
      };

      const rows = await prisma.leaderboardEntry.findMany({
        where: { mode },
        orderBy: [{ bestScore: "desc" }, { updatedAt: "asc" }, { id: "asc" }],
        select: { userId: true, bestScore: true, updatedAt: true, id: true },
      });

      const targetIndex = rows.findIndex((row) => row.userId === userId);
      if (targetIndex === -1) {
        return { mode, userId, rank: null, items: [] };
      }

      const scoredRows = rows.map((row, index, allRows) => {
        const previous = index > 0 ? allRows[index - 1] : null;
        const rank = previous && previous.bestScore === row.bestScore ? 0 : index + 1;
        return { ...row, rank };
      });
      for (let i = 0; i < scoredRows.length; i += 1) {
        if (scoredRows[i]!.rank === 0) {
          scoredRows[i]!.rank = scoredRows[i - 1]!.rank;
        }
      }

      const rank = scoredRows[targetIndex]!.rank;
      const n = scoredRows.length;
      const k = AROUND_ME_NEIGHBORS;
      const start = Math.max(0, targetIndex - k);
      const end = Math.min(n, targetIndex + k + 1);
      const windowRows = scoredRows.slice(start, end);

      const names = await prisma.user.findMany({
        where: { id: { in: windowRows.map((r) => r.userId) } },
        select: { id: true, name: true } as any,
      });
      const nameByUserId = new Map<string, string | null>();
      for (const user of names as any[]) {
        if (typeof user?.id === "string") {
          nameByUserId.set(user.id, typeof user?.name === "string" ? user.name : null);
        }
      }

      return {
        mode,
        userId,
        rank,
        items: windowRows.map((r) => ({
          mode,
          userId: r.userId,
          name: nameByUserId.get(r.userId) ?? r.userId,
          bestScore: r.bestScore,
          rank: r.rank,
        })),
      };
    },
  );
};

