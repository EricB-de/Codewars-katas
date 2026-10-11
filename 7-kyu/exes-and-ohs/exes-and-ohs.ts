export function xo(str: string) : boolean {
  const strX= str.toLowerCase().split('').filter(char=>char==='x');
  const strO= str.toLowerCase().split('').filter(char=>char==='o');
  return strX.length == strO.length;
}