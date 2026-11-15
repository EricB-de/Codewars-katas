export const gps = (s: number, x: number[]): number => {
  if (x.length <= 1) {
    return 0;
  }
​
  let maxSpeed = 0;
​
  for (let i = 1; i < x.length; i++) {
    const deltaDistance = (x.at(i) ?? 0) - (x.at(i - 1) ?? 0);
    const speed = (3600 * deltaDistance) / s;
​
    if (speed > maxSpeed) {
      maxSpeed = speed;
    }
  }
​
  return Math.floor(maxSpeed);
};
​