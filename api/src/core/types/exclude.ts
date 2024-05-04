/**
 * Exclude some property on type
 *
 * @example
 * ```typescript
 * type Post {
 *  id: string;
 *  name: string;
 *  email: string;
 * }
 *
 * Exclude<Post, 'id' | 'email'>
 * ```
 **/

export type Exclude<T, K extends keyof T> = Omit<T, K>
