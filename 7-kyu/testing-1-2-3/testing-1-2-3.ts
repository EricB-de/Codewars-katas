export function number(array: string[]): string[]{
  return array.map((el,index)=>`${index+1}: ${el. toString()}`);
}