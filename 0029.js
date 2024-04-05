/* Write a JavaScript program to remove a character at the specified position in a given string and return the modified string. */

function modStr(str) {
    let result = str.split("");
    delete result[Math.round(Math.random()*result.length)];
    return (result.join(""));
}
console.log(modStr("hola"));