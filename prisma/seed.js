import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// Prisma generates TS under src/generated; the runnable ESM build lives in dist after `npm run build`
// (matches Docker runtime, which copies /app/dist but not compiled client under src).
const clientUrl = new URL("../dist/generated/prisma/client.js", import.meta.url).href;

let PrismaClient;
try {
  ({ PrismaClient } = await import(clientUrl));
} catch {
  console.error(
    "Could not load Prisma client from dist. Run: npm run prisma:generate && npm run build",
  );
  process.exit(1);
}

function getConnectionString() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  const user = process.env.POSTGRES_USER;
  const password = process.env.POSTGRES_PASSWORD;
  const db =
    process.env.POSTGRES_DB ?? process.env.POSTGRES_PROD_DB ?? process.env.POSTGRES_TEST_DB;
  if (!user || !password || !db) return null;
  const host = process.env.POSTGRES_HOST ?? "localhost";
  const port = process.env.POSTGRES_PORT ?? "5432";
  const schema = process.env.POSTGRES_SCHEMA ?? "public";
  return `postgresql://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${host}:${port}/${encodeURIComponent(db)}?schema=${encodeURIComponent(schema)}`;
}

const connectionString = getConnectionString();
if (!connectionString) {
  console.error(
    "Missing database URL. Set DATABASE_URL or POSTGRES_USER, POSTGRES_PASSWORD, and POSTGRES_DB (or POSTGRES_PROD_DB / POSTGRES_TEST_DB).",
  );
  process.exit(1);
}

const pool = new Pool({ connectionString });
const prisma = new PrismaClient({
  adapter: new PrismaPg(pool),
});

const USER_COUNT = 50;
const RUNS_PER_MODE_PER_USER = 5;

/** @type {const} */
const MODES = ["ODD_ONE_OUT", "REMEMBER_COLOR"];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRememberColorScore() {
  return Number((Math.random() * 50).toFixed(1));
}

function randomOddOneOutScore() {
  return randomInt(10, 5000);
}

async function main() {
  for (let i = 1; i <= USER_COUNT; i += 1) {
    const userId = `seed-user-${String(i).padStart(3, "0")}`;

    await prisma.user.upsert({
      where: { id: userId },
      update: {
        lastSeenAt: new Date(),
      },
      create: {
        id: userId,
        name: `Seed User ${i}`,
        platform: i % 2 === 0 ? "ios" : "android",
      },
    });

    for (const mode of MODES) {
      const runs = Array.from({ length: RUNS_PER_MODE_PER_USER }, () => ({
        userId,
        mode,
        score: mode === "REMEMBER_COLOR" ? randomRememberColorScore() : randomOddOneOutScore(),
      }));

      await prisma.scoreRun.createMany({
        data: runs,
      });

      const bestScore = runs.reduce((best, run) => Math.max(best, run.score), Number.NEGATIVE_INFINITY);

      await prisma.leaderboardEntry.upsert({
        where: { mode_userId: { mode, userId } },
        update: { bestScore },
        create: { mode, userId, bestScore },
      });
    }
  }

  console.log(
    `Seed complete: ${USER_COUNT} users, ${USER_COUNT * MODES.length * RUNS_PER_MODE_PER_USER} score runs, ${USER_COUNT * MODES.length} leaderboard entries.`,
  );
}

main()
  .catch(async (error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
