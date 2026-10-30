export function reverseWords(str: string): string {
  return str.split(' ').map(string=> string.split('').reverse().join('')).join(' ');
}