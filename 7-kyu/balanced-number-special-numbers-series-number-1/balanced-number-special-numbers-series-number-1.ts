export function balancedNum(number: number): string {
  const isBalanced = (str: string, diff = 0): boolean => {
    if (str.length <= 2) return diff === 0;
​
    const first = Number(str[0]);
    const last = Number(str[str.length - 1]);
​
    return isBalanced(str.slice(1, -1), diff + first - last);
  };
​
  return isBalanced(String(number)) ? 'Balanced' : 'Not Balanced';
}
​