export function twoSort(s: string[]): string {
  const sorted = [...s].sort();
  return sorted[0].split("").join("***");
}