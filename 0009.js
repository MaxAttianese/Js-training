/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.*/

function isPangram(string) {
  let str = string.toLowerCase().trim().split("");
  let result = "abcdefghijklmnopqrstuvwxyz".split("").reduce((pre, cur) => {
    if (!str.includes(cur)) {
      pre = 1;
    }
    if (pre == 1) {
      return pre;
    }
    return pre;
  }, 0);

  if (result) {
    return false;
  } else {
    return true;
  }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("The quick bromps over the lazy dog"));
