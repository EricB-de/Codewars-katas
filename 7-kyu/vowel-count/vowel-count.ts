export class Kata {
  static getCount(str: string): number {
    let count= str.trim().match(/[aeiou]/gi) || [];
    return count.length;
  }
}