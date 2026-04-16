import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { env } from "./config.js";

declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

export const prisma: PrismaClient =
  globalThis.__prisma ??
  new PrismaClient({
    adapter: new PrismaPg(
      new Pool({
        connectionString: env.DATABASE_URL,
      }),
    ),
  });

if (process.env.NODE_ENV !== "production") globalThis.__prisma = prisma;

