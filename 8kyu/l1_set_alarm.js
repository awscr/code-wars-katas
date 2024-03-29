/* https://www.codewars.com/kata/568dcc3c7f12767a62000038

L1: Set Alarm

Instructions:
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, 
vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should 
return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/

// My solution
function setAlarm(employed, vacation) {
  return employed && !vacation;
}

// Trials
console.log(setAlarm(true, true)); //false
console.log(setAlarm(false, false)); //false
console.log(setAlarm(true, false)); //true
