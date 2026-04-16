export function sendError(reply, statusCode, code, message, details) {
    return reply.status(statusCode).send({
        error: {
            code,
            message,
            details,
        },
    });
}
//# sourceMappingURL=errors.js.map