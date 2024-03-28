/* Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. */

function allSanSilvesterSunday() {
    let result = [];
    for(let y = 2014; y <= 2050; y++) {
        let day = new Date(`${y}-01-01`);
        if(day.getDay() == 0) {
            result.push(y)
        }
        continue;
    }
    return result
}
console.log(allSanSilvesterSunday());