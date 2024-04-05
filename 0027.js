/* Write a JavaScript program to check two given integers whether one is positive and another one is negative. */

function isPositiveAndNegative(x, y) {
  if ((x > 0 && y < 0) || (x < 0 && y > 0)) {
    return true;
  }
  return false;
}

console.log(isPositiveAndNegative(1, -1));
