/* https://www.codewars.com/kata/5545f109004975ea66000086
Is n divisible by x and y

Instructions:
Create a function that checks if a number n is divisible by two numbers x AND y. All 
inputs are positive, non-zero numbers.
*/

// My solution
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// Trials
console.log(isDivisible(3, 3, 4)); //false
console.log(isDivisible(12, 3, 4)); //true
console.log(isDivisible(48, 3, 4)); //true
