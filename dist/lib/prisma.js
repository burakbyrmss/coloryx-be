import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { env } from "./config.js";
export const prisma = globalThis.__prisma ??
    new PrismaClient({
        adapter: new PrismaPg(new Pool({
            connectionString: env.databaseUrl,
        })),
    });
globalThis.__prisma = prisma;
//# sourceMappingURL=prisma.js.map