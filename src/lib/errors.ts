export type ApiErrorCode =
  | "BAD_REQUEST"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "CONFLICT"
  | "RATE_LIMITED"
  | "INTERNAL";

/** Human-readable diagnostic text for logs and API responses (e.g. INTERNAL errors). */
export function formatErrorForResponse(err: unknown): string {
  if (err instanceof Error) {
    if (process.env.NODE_ENV !== "production" && err.stack) return err.stack;
    return err.message;
  }
  try {
    return JSON.stringify(err);
  } catch {
    return String(err);
  }
}

export function sendError(
  reply: any,
  statusCode: number,
  code: ApiErrorCode,
  message: string,
  details?: unknown,
  detailMessage?: string,
) {
  const body: {
    error: {
      code: ApiErrorCode;
      message: string;
      details?: unknown;
      detailMessage?: string;
    };
  } = {
    error: { code, message },
  };
  if (details !== undefined) body.error.details = details;
  if (detailMessage !== undefined) body.error.detailMessage = detailMessage;
  return reply.status(statusCode).send(body);
}

