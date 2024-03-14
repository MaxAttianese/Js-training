/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}. */

function count(string) {
  let result = {};
  string.split("").forEach((element) => { Object.keys(result).includes(element) ? result[element] += 1 : result[element] = 1});
  return result;
}

console.log(count("aba"));
console.log(count(""));
console.log(count("elefante"));

/* Variante per stringe con caratteri misti M/m 
function count(string) {
  let result = {};
  string.split("").forEach(element => {
    if(Object.keys(result).includes(element.toLowerCase())){
        result[element.toLowerCase()] += 1;
    } else {
        result[element.toLowerCase()] = 1;
    }
  });
  return result;
}

console.log(count("Massimiliano"));
*/
