/* Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*/

function getData() {
    const date = new Date().toLocaleDateString();
    return date;
}

console.log(getData());