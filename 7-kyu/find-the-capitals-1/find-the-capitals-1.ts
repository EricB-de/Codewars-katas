export function capitals(word: string): number[] {
  const index: number[] = [];
​
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      index.push(i);
    }
  }
​
  return index;
}
​