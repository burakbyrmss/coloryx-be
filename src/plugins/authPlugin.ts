import fp from "fastify-plugin";
import type { FastifyPluginAsync } from "fastify";
import jwt from "@fastify/jwt";
import { jwtSecret } from "../lib/auth.js";
import { sendError } from "../lib/errors.js";

export const authPlugin: FastifyPluginAsync = fp(async (app) => {
  await app.register(jwt, { secret: jwtSecret() });

  app.decorate("authenticate", async (request, reply) => {
    try {
      await request.jwtVerify();
      if (request.user.typ !== "access") {
        return sendError(reply, 401, "UNAUTHORIZED", "Invalid token type");
      }
      request.auth = {
        userId: request.user.sub,
        deviceId: request.user.did,
        tokenId: request.user.jti,
      };
    } catch {
      return sendError(reply, 401, "UNAUTHORIZED", "Unauthorized");
    }
  });
});

declare module "fastify" {
  interface FastifyInstance {
    authenticate: (request: any, reply: any) => Promise<void>;
  }
}

