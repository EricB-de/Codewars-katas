export class Kata {
  static squareDigits(num: number): number {
    return Number(num.toString().split('').map(digit => Number(digit) ** 2).join(''));
  }
}