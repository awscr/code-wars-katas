/* https://www.codewars.com/kata/57f781872e3d8ca2a000007e
Beginner - Lost Without a Map

Instructions:
Given an array of integers, return a new array with each value doubled.
*/

// My solution
function maps(x) {
  return x.map((num) => num * 2);
}

// Trials
console.log(maps([1, 2, 3])); //[2, 4, 6]
console.log(maps([0, -55, 6, 600, 2, 5])); //[0, -110, 12, 1200, 4, 10]
console.log(maps([])); //[]
