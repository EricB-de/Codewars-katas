export function isPangram(phrase: string): boolean {
  const lower = phrase.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(char => lower.includes(char));
}