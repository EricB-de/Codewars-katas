export function findNeedle(haystack: any[]):string {
  for(let i: number=0; i<=haystack.length; i++){
    if(typeof haystack[i]==="string" && haystack[i]==="needle" ){
      return `found the needle at position ${i}`;
    }
  }
  return "needle not found";
}