export function isIsogram(str: string): boolean{
  const lowerStr = str.toLowerCase();
  const uniqueLetters = new Set(lowerStr);
  
  return uniqueLetters.size === lowerStr.length;
}