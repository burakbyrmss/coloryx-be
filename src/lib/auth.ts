import type { FastifyRequest } from "fastify";
import { env } from "./config.js";

export type AccessTokenPayload = {
  sub: string; // deviceId
};

export function assertAuth(request: FastifyRequest): { userId: string; deviceId: string } {
  // fastify-jwt decorates request with `jwtVerify` and `user`
  const u = (request as FastifyRequest & { user?: AccessTokenPayload }).user;
  if (!u?.sub) {
    throw new Error("Missing auth context");
  }
  return { userId: u.sub, deviceId: u.sub };
}

export function accessTokenOptions() {
  return { expiresIn: "15m" as const };
}

export function refreshTokenOptions() {
  return { expiresIn: "30d" as const };
}

export function jwtSecret() {
  return env.JWT_SECRET;
}

