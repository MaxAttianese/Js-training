/* Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1. */

function switchFirstAndLast(str) {
    if (str.length <= 1 || str[0] == str[str.length - 1]) {
      return str;
    }
    let letters = str.split("");
    const first = letters.shift();
    const last = letters.pop();
    letters.push(first);
    letters.unshift(last);
    return (letters.join(""));
}
console.log(switchFirstAndLast("Massimiliano"));
console.log(switchFirstAndLast("Aurora"));
console.log(switchFirstAndLast("Roberta"));