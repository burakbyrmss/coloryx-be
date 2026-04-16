import { env } from "./config.js";
export function assertAuth(request) {
    // fastify-jwt decorates request with `jwtVerify` and `user`
    const u = request.user;
    if (!u?.sub || !u.did) {
        throw new Error("Missing auth context");
    }
    return { userId: u.sub, deviceId: u.did };
}
export function accessTokenOptions() {
    return { expiresIn: "15m" };
}
export function refreshTokenOptions() {
    return { expiresIn: "30d" };
}
export function jwtSecret() {
    return env.JWT_SECRET;
}
//# sourceMappingURL=auth.js.map