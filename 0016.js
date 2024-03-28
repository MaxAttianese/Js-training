/* Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. */

function leapYear(year) {
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        return "it'l a leap year";
    }
    return "it's not a leap year";
}
console.log(leapYear(2024));