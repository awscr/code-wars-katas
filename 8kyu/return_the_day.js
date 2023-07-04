/* https://www.codewars.com/kata/59dd3ccdded72fc78b000b25
Return the day 

Instructions:
Complete the function which returns the weekday according to the input number:

    1 returns "Sunday"
    2 returns "Monday"
    3 returns "Tuesday"
    4 returns "Wednesday"
    5 returns "Thursday"
    6 returns "Friday"
    7 returns "Saturday"
    Otherwise returns "Wrong, please enter a number between 1 and 7"
*/

// My solution
function whatday(num) {
  const days = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };

  return days[num] || "Wrong, please enter a number between 1 and 7";
}

// Trials
console.log(whatday(2)); //"Monday"
console.log(whatday(7)); //"Saturday"
console.log(whatday(1)); //"Sunday"
