export function howMuchILoveYou(n: number): string {
  return ["not at all", "I love you", "a little", "a lot", "passionately", "madly"][n % 6];
}
​