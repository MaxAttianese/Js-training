/* Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. */

function calcTriangleArea(ab, ac, bc) {
    const semiPerimeter = (ab + ac + bc) / 2;
    const area = Math.sqrt(
        semiPerimeter*(semiPerimeter - ab)*(semiPerimeter - ac)*(semiPerimeter - bc)
    );

    return (+area.toFixed(2));
}

console.log(calcTriangleArea(5,6,7));