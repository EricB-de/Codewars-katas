export function sumDigits(n: number): number {
  let sum = 0
  for (let num = Math.abs(n); num > 0; num = Math.floor(num / 10)) {
    sum += num % 10;
  }
​
  return sum;
}
​