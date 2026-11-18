function getDivisorsCnt(n){
    let count = 0;
  const sqrtN = Math.floor(Math.sqrt(n));
  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      count += 2;
    }
  }
  return sqrtN * sqrtN === n ? count - 1 : count;
}