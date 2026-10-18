export function isValidWalk(walk: string[]) {
  if (walk.length !== 10) return false;
  
  let northSouth = 0;
  let eastWest = 0;
  
​
  for (let d of walk) {
    if (d === 'n') northSouth++;
    if (d === 's') northSouth--;
    if (d === 'e') eastWest++;
    if (d === 'w') eastWest--;
  }
  
​
  return northSouth === 0 && eastWest === 0;
}