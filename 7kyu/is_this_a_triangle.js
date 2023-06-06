/* https://www.codewars.com/kata/56606694ec01347ce800001b
Is this a triangle?

Instructions:
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length 
and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

// My solution
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

// Trials
console.log(isTriangle(1, 2, 2)); //true
console.log(isTriangle(7, 2, 2)); //false
console.log(isTriangle()); //
