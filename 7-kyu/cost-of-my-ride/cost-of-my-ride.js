function insurance(age, size, numofdays){
  if (numofdays <= 0) {
    return 0;
  }
​
  let dailyRate = 50;
​
  if (age < 25) {
    dailyRate += 10;
  }
​
  if (size === "economy") {
    dailyRate += 0;
  } else if (size === "medium") {
    dailyRate += 10;
  } else {
    dailyRate += 15; 
  }
​
  return dailyRate * numofdays;
}
​