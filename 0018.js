/* Write a JavaScript program to calculate the days left before Christmas. */

function timeForChristmas() {
  const today = new Date();
  const christmas = new Date(`${today.getFullYear()}-12-25`).getTime();
  return `There are ${Math.floor((christmas - today.getTime()) / 1000 / 3600 / 24)} days left until Christmas`;
}
console.log(timeForChristmas());
