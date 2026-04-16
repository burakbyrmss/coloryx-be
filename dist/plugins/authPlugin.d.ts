import type { FastifyPluginAsync } from "fastify";
export declare const authPlugin: FastifyPluginAsync;
declare module "fastify" {
    interface FastifyInstance {
        authenticate: (request: any, reply: any) => Promise<void>;
    }
}
//# sourceMappingURL=authPlugin.d.ts.map