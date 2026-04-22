import "dotenv/config";
import { GameMode, PrismaClient } from "../src/generated/prisma/client.js";

const prisma = new PrismaClient();

const USER_COUNT = 50;
const RUNS_PER_MODE_PER_USER = 5;

const MODES: GameMode[] = [GameMode.ODD_ONE_OUT, GameMode.REMEMBER_COLOR];

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRememberColorScore(): number {
  return Number((Math.random() * 100).toFixed(1));
}

function randomOddOneOutScore(): number {
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
        score: mode === GameMode.REMEMBER_COLOR ? randomRememberColorScore() : randomOddOneOutScore(),
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

  // eslint-disable-next-line no-console
  console.log(
    `Seed complete: ${USER_COUNT} users, ${USER_COUNT * MODES.length * RUNS_PER_MODE_PER_USER} score runs, ${USER_COUNT * MODES.length} leaderboard entries.`,
  );
}

main()
  .catch(async (error) => {
    // eslint-disable-next-line no-console
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
