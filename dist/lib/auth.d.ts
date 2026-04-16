import type { FastifyRequest } from "fastify";
export type AccessTokenPayload = {
    sub: string;
};
export declare function assertAuth(request: FastifyRequest): {
    userId: string;
    deviceId: string;
};
export declare function accessTokenOptions(): {
    expiresIn: "15m";
};
export declare function refreshTokenOptions(): {
    expiresIn: "30d";
};
export declare function jwtSecret(): string;
//# sourceMappingURL=auth.d.ts.map