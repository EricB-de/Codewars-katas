 export const countPositivesSumNegatives = (input: number[] | null): number[] => {
   if (!input || input.length === 0) return [];
  
  const positive = input.filter(n=>n>0).length;
  const negative= input.filter(n=>n<0).reduce((sum,el)=>sum+el,0);
  return [positive,negative];
}