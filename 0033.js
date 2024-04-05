/*Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more. */

function last3Characters(str) {
    return `${str.substring(str.length - 3)}${str}${str.substring(str.length - 3)}`;
}
console.log(last3Characters("ciaoneee"));