export function uniqueInOrder<T>(iterable: string | readonly T[]): T[] {
  return [...iterable].filter((element, index) => element !== iterable[index - 1]) as T[];
}
​