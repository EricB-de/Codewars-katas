export function between(a: number, b: number): number[] {
  const arr: Array<number> = [];
  for(let i: number = a; i<=b; i++){
    arr.push(i);
  }
  return arr;
}