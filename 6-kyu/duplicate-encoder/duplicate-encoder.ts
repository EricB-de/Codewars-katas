export function duplicateEncode(word: string){
  const lowerWord = word.toLowerCase();
  const charCount: Record<string, number> = {};
​
  for (const char of lowerWord) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
​
  return lowerWord.split("").map(char => charCount[char] > 1 ? ")" : "(").join("");
}