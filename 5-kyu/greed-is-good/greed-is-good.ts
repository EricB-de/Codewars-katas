export function score(dice: readonly number[]): number {
  const counts = new Map<number, number>();
​
  for (const die of dice) {
    counts.set(die, (counts.get(die) ?? 0) + 1);
  }
​
  let totalScore = 0;
​
  const ones = counts.get(1) ?? 0;
  totalScore += Math.floor(ones / 3) * 1000 + (ones % 3) * 100;
​
  const fives = counts.get(5) ?? 0;
  totalScore += Math.floor(fives / 3) * 500 + (fives % 3) * 50;
​
  for (const face of new Set([2, 3, 4, 6])) {
    const count = counts.get(face) ?? 0;
    if (count >= 3) {
      totalScore += face * 100;
    }
  }
​
  return totalScore;
}
​