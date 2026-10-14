export function powersOfTwo(n:number):number[]{
  const arr: Array<number> = [];
  for(let i: number=0;i<=n;i++){
    arr.push(2**i);
  }
  return arr;
}