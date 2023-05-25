/* https://www.codewars.com/kata/555a67db74814aa4ee0001b5
Is it even?

Instructions:
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.
*/

// My solution
function testEven(n) {
  return n % 2 === 0;
}

// Trials
console.log(testEven(0)); //true
console.log(testEven(0.5)); //false
console.log(testEven(-4)); //true
console.log(testEven(66)); //true
