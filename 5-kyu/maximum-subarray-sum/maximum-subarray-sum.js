function maxSequence(arr){
    let sum = 0;
    let maxSoFar = 0;
​
    for (const item of arr) {
        sum = Math.max(0, sum + item);
        maxSoFar = Math.max(maxSoFar, sum);
    }
​
    return maxSoFar;
}
​