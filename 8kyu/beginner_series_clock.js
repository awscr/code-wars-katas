/* https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
Beginner Series #2 Clock

Instructions:
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
*/

// My solution
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

// Trials
console.log(past(0, 1, 1)); //61000
console.log(past(1, 1, 1)); //3661000
console.log(past(0, 0, 0)); //0
