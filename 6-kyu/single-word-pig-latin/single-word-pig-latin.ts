export function pigLatin(word: string): string | null {
  if (!word || !/^[a-zA-Z]+$/.test(word)) {
    return null;
  }
​
  const lowerWord = word.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
​
  if (vowels.includes(lowerWord[0])) {
    return `${lowerWord}way`;
  }
​
  const firstVowelIndex = lowerWord.split('').findIndex(char => vowels.includes(char));
​
  if (firstVowelIndex === -1) {
    return `${lowerWord}ay`;
  }
​
  const leadingConsonants = lowerWord.slice(0, firstVowelIndex);
  const restOfWord = lowerWord.slice(firstVowelIndex);
​
  return `${restOfWord}${leadingConsonants}ay`;
}
​