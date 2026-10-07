export class Kata {
  static highAndLow(numbers: string): string {
    let wordArr= numbers.split(' ').map(item=>Number(item));
    let maxNum= Math.max(...wordArr);
    let minNum = Math.min(...wordArr);
    return `${maxNum} ${minNum}`;
}
}