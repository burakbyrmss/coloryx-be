import { Type } from "@sinclair/typebox";
import { prisma } from "../../lib/prisma.js";
import { sendError } from "../../lib/errors.js";
export const savesRoutes = async (app) => {
    app.get("/saves/latest", {
        preHandler: app.authenticate,
        schema: {
            summary: "Get latest cloud save",
            response: {
                200: Type.Object({
                    version: Type.Integer(),
                    payload: Type.Object({}, { additionalProperties: true }),
                    updatedAt: Type.String(),
                }),
            },
        },
    }, async (request, reply) => {
        const auth = request.auth;
        if (!auth)
            return sendError(reply, 401, "UNAUTHORIZED", "Unauthorized");
        const save = await prisma.cloudSave.findUnique({
            where: { userId: auth.userId },
            select: { version: true, payloadJson: true, updatedAt: true },
        });
        if (!save) {
            return { version: 0, payload: {}, updatedAt: new Date(0).toISOString() };
        }
        return {
            version: save.version,
            payload: save.payloadJson ?? {},
            updatedAt: save.updatedAt.toISOString(),
        };
    });
    app.put("/saves", {
        preHandler: app.authenticate,
        schema: {
            summary: "Upsert cloud save with optimistic concurrency",
            body: Type.Object({
                expectedVersion: Type.Integer({ minimum: 0 }),
                payload: Type.Object({}, { additionalProperties: true }),
            }),
            response: {
                200: Type.Object({
                    version: Type.Integer(),
                    updatedAt: Type.String(),
                }),
                409: Type.Object({
                    error: Type.Any(),
                }),
            },
        },
    }, async (request, reply) => {
        const auth = request.auth;
        if (!auth)
            return sendError(reply, 401, "UNAUTHORIZED", "Unauthorized");
        const { expectedVersion, payload } = request.body;
        const existing = await prisma.cloudSave.findUnique({
            where: { userId: auth.userId },
            select: { version: true },
        });
        const currentVersion = existing?.version ?? 0;
        if (currentVersion !== expectedVersion) {
            return sendError(reply, 409, "CONFLICT", "Version conflict", {
                currentVersion,
            });
        }
        const nextVersion = currentVersion + 1;
        const row = await prisma.cloudSave.upsert({
            where: { userId: auth.userId },
            create: {
                userId: auth.userId,
                version: nextVersion,
                payloadJson: payload,
            },
            update: {
                version: nextVersion,
                payloadJson: payload,
            },
            select: { version: true, updatedAt: true },
        });
        return { version: row.version, updatedAt: row.updatedAt.toISOString() };
    });
};
//# sourceMappingURL=saves.js.map