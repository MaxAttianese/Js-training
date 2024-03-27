/* Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front. */

function reverseStr(string) {
    return string.split("").reverse().join("");
}

console.log(reverseStr("w3resource"));