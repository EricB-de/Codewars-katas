export const findUniq = (arr: string[]): string => {
  const getSignature = (str: string): string => {
    const cleaned = str.toLowerCase().replace(/\s+/g, '');
    const uniqueChars = Array.from(new Set(cleaned));
    return uniqueChars.sort().join('');
  };
​
  const signatures = arr.slice(0, 3).map(getSignature);
​
  const majoritySignature = signatures[0] === signatures[1] ? signatures[0] 
  : (signatures[0] === signatures[2] ? signatures[0] : signatures[1]);
​
  return arr.find(str => getSignature(str) !== majoritySignature)!;
}
​