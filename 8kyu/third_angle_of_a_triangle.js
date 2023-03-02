/* https://www.codewars.com/kata/5a023c426975981341000014
Third Angle of a Triangle

Instructions:
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle
*/

// My solution
function otherAngle(a, b) {
  return 180 - a - b;
}

// Trials
console.log(otherAngle(60, 90)); //30
console.log(otherAngle(30, 30)); //120
console.log(otherAngle(0, 100)); //80
