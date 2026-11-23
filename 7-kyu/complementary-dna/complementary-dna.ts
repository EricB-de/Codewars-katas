export class Kata {
  static dnaStrand(dna: string): string {
    const pairs: Record<string, string> = { A: 'T', T: 'A', C: 'G', G: 'C' };
    return dna.split('').map(c => pairs[c] ?? '').join('');
  }
}
​