/* Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string. */

function pyStr(str) {
    if(str.toLowerCase().startsWith("py")) {
        return str;
    }
    return `Py${str}`;
}
console.log(pyStr("fuoco"));
console.log(pyStr("pyrite"));
console.log(pyStr("Python"));