import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model AuthIdentity
 *
 */
export type AuthIdentity = Prisma.AuthIdentityModel;
/**
 * Model Device
 *
 */
export type Device = Prisma.DeviceModel;
/**
 * Model ScoreRun
 *
 */
export type ScoreRun = Prisma.ScoreRunModel;
/**
 * Model LeaderboardEntry
 *
 */
export type LeaderboardEntry = Prisma.LeaderboardEntryModel;
/**
 * Model CloudSave
 *
 */
export type CloudSave = Prisma.CloudSaveModel;
/**
 * Model RefreshToken
 *
 */
export type RefreshToken = Prisma.RefreshTokenModel;
/**
 * Model Event
 *
 */
export type Event = Prisma.EventModel;
//# sourceMappingURL=client.d.ts.map