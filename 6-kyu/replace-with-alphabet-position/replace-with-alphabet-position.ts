export function alphabetPosition(text:string):string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
​
  return text
    .toLowerCase()
    .split('')
    .map(char => alphabet.indexOf(char) + 1)
    .filter(position => position > 0)
    .join(' ');
}