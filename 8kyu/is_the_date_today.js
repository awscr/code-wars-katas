/* https://www.codewars.com/kata/563c13853b07a8f17c000022
Is the date today

Instructions:
Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/

// My solution
// function isToday(date) {
//   return new Date().toDateString() === date.toDateString();
// }

function isToday(date) {
  return new Date().toDateString(); //=== date.toDateString();
}

// Trials
console.log(isToday()); //
console.log(isToday()); //
console.log(isToday()); //
