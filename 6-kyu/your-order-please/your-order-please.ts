export function order(words: string): string {
  if (!words) return "";
​
  const wordList = words.split(" ");
  const result: string[] = [];
​
  for (let pos = 1; pos <= wordList.length; pos++) {
    const found = wordList.find((word) => word.includes(String(pos)));
    if (found) result.push(found);
  }
​
  return result.join(" ");
}
​