import "dotenv/config";
import { z } from "zod";
const EnvSchema = z.object({
    PORT: z.coerce.number().int().positive().default(3000),
    JWT_SECRET: z.string().min(16),
    CORS_ORIGIN: z.string().min(1).default("*"),
    POSTGRES_USER: z.string().min(1),
    POSTGRES_PASSWORD: z.string().min(1),
    POSTGRES_HOST: z.string().min(1).default("localhost"),
    POSTGRES_PORT: z.coerce.number().int().positive().default(5432),
    // Preferred: set POSTGRES_DB explicitly. If omitted, we fall back to POSTGRES_PROD_DB.
    POSTGRES_DB: z.string().min(1).optional(),
    POSTGRES_PROD_DB: z.string().min(1).optional(),
    POSTGRES_TEST_DB: z.string().min(1).optional(),
    POSTGRES_SCHEMA: z.string().min(1).default("public"),
});
const parsed = EnvSchema.safeParse(process.env);
if (!parsed.success) {
    // Fail fast on boot with a readable error
    // eslint-disable-next-line no-console
    console.error("Invalid environment variables:", parsed.error.flatten().fieldErrors);
    process.exit(1);
}
function buildPostgresUrl(e) {
    const dbName = e.POSTGRES_DB ?? e.POSTGRES_PROD_DB ?? e.POSTGRES_TEST_DB;
    if (!dbName) {
        // eslint-disable-next-line no-console
        console.error("Missing database name. Set POSTGRES_DB (or POSTGRES_PROD_DB / POSTGRES_TEST_DB).");
        process.exit(1);
    }
    const user = encodeURIComponent(e.POSTGRES_USER);
    const password = encodeURIComponent(e.POSTGRES_PASSWORD);
    const schema = encodeURIComponent(e.POSTGRES_SCHEMA);
    return `postgresql://${user}:${password}@${e.POSTGRES_HOST}:${e.POSTGRES_PORT}/${dbName}?schema=${schema}`;
}
export const env = {
    ...parsed.data,
    databaseUrl: buildPostgresUrl(parsed.data),
};
//# sourceMappingURL=config.js.map