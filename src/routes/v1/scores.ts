import type { FastifyPluginAsync } from "fastify";
import { Type } from "@sinclair/typebox";
import { prisma } from "../../lib/prisma.js";
import { sendError } from "../../lib/errors.js";
import { GameModeSchema } from "./schemas.js";

const SubmitScoreBody = Type.Object({
  mode: GameModeSchema,
  score: Type.Number({ minimum: 0, maximum: 1_000_000 }),
  meta: Type.Optional(Type.Object({}, { additionalProperties: true })),
});

export const scoresRoutes: FastifyPluginAsync = async (app) => {
  app.post(
    "/scores",
    {
      preHandler: app.authenticate,
      schema: {
        summary: "Submit a score run",
        body: SubmitScoreBody,
        response: {
          200: Type.Object({
            id: Type.String(),
            createdAt: Type.String(),
          }),
        },
      },
    },
    async (request, reply) => {
      const auth = request.auth;
      if (!auth) return sendError(reply, 401, "UNAUTHORIZED", "Unauthorized");

      const { mode, score, meta } = request.body as any;
      const normalizedScore =
        mode === "REMEMBER_COLOR" ? Number(score.toFixed(1)) : score;

      // Mode-specific constraints
      if (mode === "REMEMBER_COLOR" && (normalizedScore < 0 || normalizedScore > 100)) {
        return sendError(reply, 400, "BAD_REQUEST", "Remember Color score must be 0..100");
      }

      const run = await prisma.scoreRun.create({
        data: {
          userId: auth.userId,
          mode,
          score: normalizedScore,
          metaJson: meta ?? undefined,
        },
        select: { id: true, createdAt: true },
      });

      // Upsert leaderboard best score.
      const existing = await prisma.leaderboardEntry.findUnique({
        where: { mode_userId: { mode, userId: auth.userId } },
        select: { bestScore: true },
      });
      if (!existing || normalizedScore > existing.bestScore) {
        await prisma.leaderboardEntry.upsert({
          where: { mode_userId: { mode, userId: auth.userId } },
          create: { mode, userId: auth.userId, bestScore: normalizedScore },
          update: { bestScore: normalizedScore },
        });
      }

      return { id: run.id, createdAt: run.createdAt.toISOString() };
    },
  );

  app.get(
    "/scores/me",
    {
      preHandler: app.authenticate,
      schema: {
        summary: "Get my score runs (paginated)",
        querystring: Type.Object({
          mode: GameModeSchema,
          limit: Type.Optional(Type.Integer({ minimum: 1, maximum: 100, default: 20 })),
          cursor: Type.Optional(Type.String()),
        }),
        response: {
          200: Type.Object({
            items: Type.Array(
              Type.Object({
                id: Type.String(),
                mode: GameModeSchema,
                score: Type.Number(),
                createdAt: Type.String(),
              }),
            ),
            nextCursor: Type.Union([Type.String(), Type.Null()]),
          }),
        },
      },
    },
    async (request, reply) => {
      const auth = request.auth;
      if (!auth) return sendError(reply, 401, "UNAUTHORIZED", "Unauthorized");

      const { mode, limit = 20, cursor } = request.query as {
        mode: "ODD_ONE_OUT" | "REMEMBER_COLOR";
        limit?: number;
        cursor?: string;
      };
      const take = limit + 1;

      const cursorWhere = cursor ? { id: cursor } : undefined;
      const rows = await prisma.scoreRun.findMany({
        where: { userId: auth.userId, mode },
        orderBy: [{ createdAt: "desc" }, { id: "desc" }],
        take,
        ...(cursorWhere
          ? {
              cursor: cursorWhere,
              skip: 1,
            }
          : {}),
        select: { id: true, mode: true, score: true, createdAt: true },
      });

      const hasMore = rows.length > limit;
      const page = hasMore ? rows.slice(0, limit) : rows;
      const nextCursor = hasMore ? page[page.length - 1]!.id : null;

      return {
        items: page.map((r: { id: string; mode: string; score: number; createdAt: Date }) => ({
          id: r.id,
          mode: r.mode,
          score: r.score,
          createdAt: r.createdAt.toISOString(),
        })),
        nextCursor,
      };
    },
  );

  app.get(
    "/scores/best/me",
    {
      preHandler: app.authenticate,
      schema: {
        summary: "Get my best score for a mode",
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

      const { mode } = request.query as { mode: "ODD_ONE_OUT" | "REMEMBER_COLOR" };
      const row = await prisma.leaderboardEntry.findUnique({
        where: { mode_userId: { mode, userId: auth.userId } },
        select: { bestScore: true },
      });

      return { mode, userId: auth.userId, bestScore: row?.bestScore ?? null };
    },
  );
};

