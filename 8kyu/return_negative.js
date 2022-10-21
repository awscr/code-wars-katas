/* https://www.codewars.com/kata/55685cd7ad70877c23000102
Return Negative

Instructions:
In this simple assignment you are given a number and have 
to make it negative. But maybe the number is already 
negative?

Notes:
The number can be negative already, in which case no change
is required.

Zero (0) is not checked for any specific sign. Negative 
zeros make no mathematical sense.
*/

// My solution
// function makeNegative(num) {
//   return num <= 0 ? num : -num;
// }

// Improved solution
function makeNegative(num) {
  return -Math.abs(num);
}

// Trials
console.log(makeNegative(645)); //-645
console.log(makeNegative(0)); //0
console.log(makeNegative(-5)); //-5
