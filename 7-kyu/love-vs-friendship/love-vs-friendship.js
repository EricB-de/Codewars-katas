function wordsToMarks(string){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return string.toLowerCase().split("").map((char) => alphabet.indexOf(char) + 1).reduce((sum,position) => sum + position , 0);
}