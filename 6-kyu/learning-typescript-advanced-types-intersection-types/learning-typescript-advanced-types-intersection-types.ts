export function intersect<T extends Object, U extends Object>(first: T, second: U): T & U {
  let result = <T & U>{};
  const commonKeys = Object.keys(first).filter(key => key in second);
​
    for (const key of commonKeys) {
        (result as any)[key] = (first as any)[key];
    }
​
    return result;
}
​