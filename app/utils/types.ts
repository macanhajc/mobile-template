/**
 * A helper type that transforms selected fields in partial, and leave others intact
 */
export type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;
