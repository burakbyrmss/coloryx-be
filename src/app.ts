import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import rateLimit from "@fastify/rate-limit";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import { env } from "./lib/config.js";
import { authPlugin } from "./plugins/authPlugin.js";
import { sendError } from "./lib/errors.js";
import { routes } from "./routes/index.js";

export async function buildApp() {
  const app = Fastify({
    logger: true,
    genReqId: () => crypto.randomUUID(),
  });

  await app.register(helmet);
  await app.register(cors, {
    origin: env.CORS_ORIGIN === "*" ? true : env.CORS_ORIGIN,
    credentials: true,
  });
  await app.register(rateLimit, { max: 300, timeWindow: "1 minute" });

  await app.register(swagger, {
    openapi: {
      info: { title: "Coloryx API", version: "v1" },
    },
  });
  await app.register(swaggerUi, { routePrefix: "/docs" });

  await app.register(authPlugin);

  app.setErrorHandler((err, _req, reply) => {
    app.log.error(err);
    return sendError(reply, 500, "INTERNAL", "Internal Server Error");
  });

  await app.register(routes);

  app.get("/health", async () => ({ ok: true }));

  app.get("/ping", async () => ({
    ok: true,
    now: new Date().toISOString(),
  }));

  return app;
}

