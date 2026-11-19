export function createPhoneNumber(numbers: number[]): string {
  const areaCode = numbers.slice(0, 3).join('');
  const centralOfficeCode = numbers.slice(3, 6).join('');
  const lineNumber = numbers.slice(6).join('');
​
  return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}