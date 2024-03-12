/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. */

function getMiddle(str) {
      if (str.length % 2 == 0) {
        return str.split("").splice((str.length / 2 - 1) , 2).join("");
      } else {
        return str.split("").splice(Math.floor(str.length / 2), 1).join("");
    }
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));