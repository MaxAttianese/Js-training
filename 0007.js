/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number) */

function findOutlier(integers) {
  let result;
  let check = 0;
  
  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 != 0) {
      check++;
    } else {
      check;
    }
  }

  if (check < 2) {
    result = integers.filter((number) => number % 2 != 0);
  } else {
    result = integers.filter((number) => number % 2 == 0);
  }

  return result[0];

  /*let control = 0;
  let result;
  integers.forEach((element) => {
    if (element % 2 == 0) {
      control += 2;
    } else {
      control += 0;
    }
  });

  if (control === 2) {
      integers.forEach((el) => {
        if (el % 2 == 0) {
          result = el;
        }
      });
  } else {
      integers.forEach((el) => {
        if (el % 2 != 0) {
          result = el;
        }
      });
  }
*/
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
