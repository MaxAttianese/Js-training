/* Write a JavaScript exercise to get the filename extension.  */

const file = "example.js";

function getExtension(file) {
    if(file.includes(".")) {
        const result = `.${file.split(".").pop()}`;
        return result;
    } else {
        return "File Name Not Valid!";
    }
}
    
console.log(getExtension(file));