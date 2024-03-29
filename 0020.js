/* Write a JavaScript program to calculate multiplication and division of two numbers (input from the user). */

function calcMulAndDiv(x, y) {
    const mul = x * y;
    const div = x / y;
    return `Multiplication result: ${mul} - Division result: ${div}`;
}

console.log(calcMulAndDiv(10, 10));