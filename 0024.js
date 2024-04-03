/* Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum. */

function sum(x, y) {
    console.log(x,y);
    if(x === y) {
        return((x+y)*3);
    } else {
        return (x+y);
    }
}

console.log(
  sum(Math.round(Math.random() * 10 + 1), Math.round(Math.random() * 10 + 1))
);