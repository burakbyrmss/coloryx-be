import "fastify";
import "@fastify/jwt";

declare module "@fastify/jwt" {
  interface FastifyJWT {
    user: {
      sub: string;
      typ: "access" | "refresh";
      jti: string;
    };
  }
}

declare module "fastify" {
  interface FastifyRequest {
    auth?: {
      userId: string;
      deviceId: string;
      tokenId: string;
    };
  }
}

