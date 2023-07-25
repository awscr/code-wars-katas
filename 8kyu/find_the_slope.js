/* https://www.codewars.com/kata/55a75e2d0803fea18f00009d
Find the Slope

Instructions:

Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2

Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope
*/

// My solution
// function slope(points) {
//   let x1 = points[0],
//     x2 = points[2];
//   let y1 = points[1],
//     y2 = points[3];
//   let slope = (y2 - y1) / (x2 - x1);

//   return slope === Infinity || slope === -Infinity || isNaN(slope)
//     ? "undefined"
//     : slope + "";
// }

// Improved solution
function slope([x1, y1, x2, y2]) {
  let slope = (y2 - y1) / (x2 - x1);
  return Number.isFinite(slope) ? `${slope}` : "undefined";
}

// Trials
console.log(slope([19, 3, 20, 3])); //"0"
console.log(slope([2, 7, 4, -7])); //"-7"
console.log(slope([-10, 6, -10, 3])); //undefined
console.log(slope([15, 45, 12, 60])); //"-5"
