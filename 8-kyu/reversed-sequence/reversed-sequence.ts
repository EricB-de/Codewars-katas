export const reverseSeq = (n: number): number[] => {
  let res: number[]= [];
  
  for(let i=n; i>=1; i--){
    res.push(i);
  }
  
  return res;
};