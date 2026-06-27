/**
 * Report errors to the Lovable runtime or log them locally.
 */
export function reportLovableError(error: unknown, context?: Record<string, unknown>) {
  console.error("[Lovable Error]:", error, context);
}
