export function generateShape(int: number): string {
  return ('+'.repeat(int) + '\n').repeat(int).trim();
}