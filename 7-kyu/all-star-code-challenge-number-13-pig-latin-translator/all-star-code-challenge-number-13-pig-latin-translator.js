var translate = function(str) {
  if (str.length < 2) return str;
  
  const vowels = 'aeiou';
  
  if (vowels.includes(str[0])) {
    return str + 'ay';
  }
  
  return str.slice(1) + str[0] + 'ay';
}