export function capitalize(s: string): [string, string] {
  const even = s.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c).join('');
  const odd = s.split('').map((c, i) => i % 2 !== 0 ? c.toUpperCase() : c).join('');
  return [even, odd];
}