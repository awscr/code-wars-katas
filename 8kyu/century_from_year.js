/* https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
Century From Year

Instructions:
The first century spans from the year 1 up to and including the year 100, the second 
century - from the year 101 up to and including the year 200, etc.

Given a year, return the century it is in.
*/

// My solution
function century(year) {
  return Math.ceil(year / 100);
}

// Trials
console.log(century(1705)); //18
console.log(century(1900)); //19
console.log(century(1601)); //17
