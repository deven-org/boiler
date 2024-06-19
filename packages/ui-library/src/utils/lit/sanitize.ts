/**
 * ## Usage
 * ```typescript
 * type User = {
 *   name: string
 *   addresses?: Address[]
 *   status?: 'offline' | 'online'
 * }
 *
 * const sanitizeUser = makeSanitizer((target: User) => ({
 *   status: typeof target.status === 'string' ? target.status : 'offline',
 *   addresses: Array.isArray(target.addresses) ? target.addresses : [],
 * }));
 *
 * sanitizeUser({
 *   name: 'John'
 * })
 * // ^ Yields
 * // {
 * //   addresses: [],
 * //   status: 'offline'
 * // }
 *
 * sanitizeUser({
 *   name: 'John',
 *   addresses: [{ street: 'Rogue Street, 13' }],
 *   status: 'online'
 * })
 * // ^ Yields
 * // {
 * //   addresses: [{ street: 'Rogue Street, 13' }],
 * //   status: 'online'
 * // }
 *
 * ```
 */
export function makeSanitizer<TTarget, TSanitizerReturn extends SanitizeFunctionResult<TTarget>>(
  sanitize: SanitizeFunction<TTarget, TSanitizerReturn>
): (unsanitized: TTarget) => TSanitizerReturn {
  return sanitize;
}

export type Sanitized<TTarget> = {
  readonly [P in keyof TTarget]: Exclude<TTarget[P], undefined>;
};

export type SanitizeFunctionResult<TTarget> = Partial<Sanitized<TTarget>>;

export type SanitizeFunction<TTarget, TResult extends SanitizeFunctionResult<TTarget>> = (
  unsanitized: TTarget
) => Sanitized<TResult>;
