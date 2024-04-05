/* Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. */

function checkDiv(num) {
  if (Math.abs(num) % 7 == 0) {
    return `${Math.abs(num)} is multiple of 7`;
  } else if (Math.abs(num) % 3 == 0) {
    return `${Math.abs(num)} is multiple of 3`;
  } else {
    return `${Math.abs(num)} isn't multiple of 3 or 7`;
  }
}

console.log(checkDiv(-144));
console.log(checkDiv(49));
console.log(checkDiv(8));