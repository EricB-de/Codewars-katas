export function minSum(arr: number[]): number {
  const sorted = [...arr].sort((a, b) => a - b);
  let sum = 0;
  const n = sorted.length;
​
  for (let i = 0; i < n / 2; i++) {
    sum += sorted[i] * sorted[n - 1 - i];
  }
​
  return sum;
}