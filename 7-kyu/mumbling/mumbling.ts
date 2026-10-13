export function accum(s: string): string {
  let result: string[] = [];
  for (let i: number = 0; i < s.length; i++) {
    let part = s[i].toUpperCase();
    for (let j: number = 0; j < i; j++) {
      part += s[i].toLowerCase();
    }
    result.push(part);
  }
  return result.join("-");
}