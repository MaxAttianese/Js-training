/* 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50. */

function is50(x, y) {
  if (x == 50 || y == 50 || x + y == 50) {
    return true;
  }
  
  return false;
}

console.log(
  is50(Math.round(Math.random() * 100 + 1), Math.round(Math.random() * 100 + 1))
);
