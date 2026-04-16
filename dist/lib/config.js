import "dotenv/config";
import { z } from "zod";
const EnvSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    PORT: z.coerce.number().int().positive().default(3000),
    JWT_SECRET: z.string().min(16),
    POSTGRES_USER: z.string().min(1),
    POSTGRES_PASSWORD: z.string().min(1),
    POSTGRES_DB: z.string().min(1),
    CORS_ORIGIN: z.string().min(1).default("*"),
});
const parsed = EnvSchema.safeParse(process.env);
if (!parsed.success) {
    // Fail fast on boot with a readable error
    // eslint-disable-next-line no-console
    console.error("Invalid environment variables:", parsed.error.flatten().fieldErrors);
    process.exit(1);
}
const dbHost = parsed.data.NODE_ENV === "production" ? "db" : "localhost";
const databaseUrl = `postgresql://${encodeURIComponent(parsed.data.POSTGRES_USER)}:${encodeURIComponent(parsed.data.POSTGRES_PASSWORD)}@${dbHost}:5432/${encodeURIComponent(parsed.data.POSTGRES_DB)}?schema=public`;
export const env = {
    ...parsed.data,
    DATABASE_URL: databaseUrl,
};
//# sourceMappingURL=config.js.map