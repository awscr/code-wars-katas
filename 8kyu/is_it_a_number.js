/* https://www.codewars.com/kata/57126304cdbf63c6770012bd
Is it a number?

Instructions:
Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
*/

// My solution
function isDigit(s) {
  return s == parseFloat(s);
}

// Trials
console.log(isDigit("3")); //true
console.log(isDigit("-3.23")); //true
console.log(isDigit("3-4")); //false
console.log(isDigit("zero")); //false
console.log(isDigit("  3   5")); //false
