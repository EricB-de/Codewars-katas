export function nthSmallest(arr: number[], pos: number):number {
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[pos - 1];
}
​