/* https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1
SpeedCode #2 - Array Madness

Instructions:
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly 
greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

Get your timer out. Are you ready? Ready, get set, GO!!!
*/

// My solution
// function arrayMadness(a, b) {
//   return (
//     a.reduce((sumSquare, num) => sumSquare + num ** 2) >
//     b.reduce((sumCube, num) => sumCube + num ** 3)
//   );
// }

function arrayMadness(a, b) {
  return (
    a.reduce((sumSquare, num) => sumSquare + num ** 2, 0) >
    b.reduce((sumCube, num) => sumCube + num ** 3, 0)
  );
}

// Trials
console.log(arrayMadness([4, 5, 6], [1, 2, 3])); //true
console.log(arrayMadness([5, 3, 2, 4, 1], [15])); //false
console.log(arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13])); //false
console.log(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1])); //true
