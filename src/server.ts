import { buildApp } from "./app.js";
import { env } from "./lib/config.js";
import { prisma } from "./lib/prisma.js";

const app = await buildApp();

app.get("/ready", async (_req, reply) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return { ok: true };
  } catch {
    reply.status(503);
    return { ok: false };
  }
});

await app.listen({ port: env.PORT, host: "0.0.0.0" });

