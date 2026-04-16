export type ApiErrorCode = "BAD_REQUEST" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "CONFLICT" | "RATE_LIMITED" | "INTERNAL";
export declare function sendError(reply: any, statusCode: number, code: ApiErrorCode, message: string, details?: unknown): any;
//# sourceMappingURL=errors.d.ts.map