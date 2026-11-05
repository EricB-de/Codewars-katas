export function countRedBeads(n: number): number {
  return n < 2 ? 0 : 2 * (n - 1);
}