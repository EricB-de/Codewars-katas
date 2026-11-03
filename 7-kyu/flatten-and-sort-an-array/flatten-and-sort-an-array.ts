export const flattenAndSort = (inputArray: number[][]): number[] => {
  const newArr = [];
  
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray[i].length; j++) {
      newArr.push(inputArray[i][j]);
    }
  }
  
  return newArr.sort((a, b) => a - b);
}
​