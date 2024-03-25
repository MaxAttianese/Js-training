/* Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

function getData() {
  const date = new Date();
  let day = date.getDay();

  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wensday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }

  let time = date.toLocaleTimeString()
  .split(":").map((el, i) => {
      if (i === 0) {
        if(el > 12) {
            return el = `${el - 12} PM`
        } else {
            return `${el} AM`;
        }
      }
      return el;
    }).join(" : ");

    return `Today is : ${day}\nCurrent time is : ${time}`;
}

console.log(getData());
