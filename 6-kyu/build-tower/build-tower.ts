export const towerBuilder = (nFloors: number): string[] => {
  const tower = [];
  for (let i: number = 1, star: number = 1; i <= nFloors; i++, star += 2) {
    tower.push(" ".repeat(nFloors - i) + "*".repeat(star) + " ".repeat(nFloors - i));
  }
  return tower;
}