/*Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.*/

function isStartWithJava(str) {
    if(str.toLowerCase().startsWith("java")) {
        return true;
    }
    return false;
}

console.log(isStartWithJava("javascript"));
console.log(isStartWithJava("github"));
