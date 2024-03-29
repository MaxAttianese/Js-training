/* Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C */

function fromCelsiusToFahrenheit(celsius) {
  return `${celsius}°C is ${(celsius / 5) * 9 + 32}°F`;
}

console.log(fromCelsiusToFahrenheit(60));

/* Convert Temperatures */

function convertTemperatures(t) {
  const check = t.split("°");
  if (check[1].toUpperCase() === "C") {
    return `${+check[0]}°C is ${(+check[0] / 5) * 9 + 32}°F`;
  } else if (check[1].toUpperCase() === "F") {
    return `${+check[0]}°F is ${((+check[0] - 32) / 9) * 5}°C`;
  } else {
    return "Unit of Measure Not Valid!";
  }
}

console.log(convertTemperatures("140°F"));
console.log(convertTemperatures("60°c"));
console.log(convertTemperatures("60°m"));
