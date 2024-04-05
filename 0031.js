/* Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back. */

function addFirstAndLast(str) {
  return `${str[0]}${str}${str[0]}`;
}
console.log(addFirstAndLast("example"));