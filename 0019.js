/* Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  */

function findTheSameNumber(num) {
  const control = Math.round(Math.random() * (10 - 1) + 1);
  if (num === control) {
    return `${num}=${control} - Good Work`;
  } else {
    return `${num}!=${control} - Not Matched`;
  }
}

console.log(findTheSameNumber(Math.round(Math.random() * (10 - 1) + 1)));
