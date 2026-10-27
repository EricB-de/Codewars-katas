export function findNextSquare(sq:number):number {
  const root = Math.sqrt(sq);
  
  if (Number.isInteger(root)) {
    let nextRoot = root + 1;
    return nextRoot * nextRoot;
  }
  
  return -1;
}