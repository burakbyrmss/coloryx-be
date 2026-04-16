import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly AuthIdentity: "AuthIdentity";
    readonly Device: "Device";
    readonly ScoreRun: "ScoreRun";
    readonly LeaderboardEntry: "LeaderboardEntry";
    readonly CloudSave: "CloudSave";
    readonly RefreshToken: "RefreshToken";
    readonly Event: "Event";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const AuthIdentityScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly provider: "provider";
    readonly providerUserId: "providerUserId";
    readonly email: "email";
    readonly userId: "userId";
};
export type AuthIdentityScalarFieldEnum = (typeof AuthIdentityScalarFieldEnum)[keyof typeof AuthIdentityScalarFieldEnum];
export declare const DeviceScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly lastSeenAt: "lastSeenAt";
    readonly deviceId: "deviceId";
    readonly platform: "platform";
    readonly userId: "userId";
};
export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum];
export declare const ScoreRunScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly mode: "mode";
    readonly score: "score";
    readonly metaJson: "metaJson";
    readonly userId: "userId";
};
export type ScoreRunScalarFieldEnum = (typeof ScoreRunScalarFieldEnum)[keyof typeof ScoreRunScalarFieldEnum];
export declare const LeaderboardEntryScalarFieldEnum: {
    readonly id: "id";
    readonly updatedAt: "updatedAt";
    readonly mode: "mode";
    readonly bestScore: "bestScore";
    readonly userId: "userId";
};
export type LeaderboardEntryScalarFieldEnum = (typeof LeaderboardEntryScalarFieldEnum)[keyof typeof LeaderboardEntryScalarFieldEnum];
export declare const CloudSaveScalarFieldEnum: {
    readonly id: "id";
    readonly updatedAt: "updatedAt";
    readonly version: "version";
    readonly payloadJson: "payloadJson";
    readonly userId: "userId";
};
export type CloudSaveScalarFieldEnum = (typeof CloudSaveScalarFieldEnum)[keyof typeof CloudSaveScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly jti: "jti";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly deviceId: "deviceId";
    readonly userId: "userId";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const EventScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly name: "name";
    readonly propsJson: "propsJson";
    readonly userId: "userId";
    readonly deviceDbId: "deviceDbId";
};
export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map