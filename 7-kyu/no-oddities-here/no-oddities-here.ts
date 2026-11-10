export function noOdds(values: number[]): number[] {
  return values.filter(item=> item%2===0);
}