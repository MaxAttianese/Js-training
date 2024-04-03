/* Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. */

function isInRange(num) {
  if (num >= 20 && num <= 100) {
    return `${num} is incluse within 20 and 100`;
  }
  if (num >= 100 && num <= 400) {
    return `${num} is incluse within 100 and 400`;
  }
  return `${num} not incluse in our ranges`;
}

console.log(isInRange(Math.round(Math.random() * 500 + 1)));
