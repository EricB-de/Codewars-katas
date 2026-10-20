export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
  const ageDifference = dadYearsOld - sonYearsOld;
  const targetDadAge = ageDifference * 2;
  
  return Math.abs(dadYearsOld - targetDadAge);
}