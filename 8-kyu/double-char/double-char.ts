export function doubleChar(str: string): string{
  let split= str.split('');
return split.map(char=> char+char).join('')
}