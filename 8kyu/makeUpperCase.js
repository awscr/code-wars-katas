/* https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7
MakeUpperCase

Instructions:
Write a function which converts the input string to uppercase.
*/

// My solution
function makeUpperCase(str) {
  return str.toUpperCase();
}

// Trials
console.log(makeUpperCase("")); //""
console.log(makeUpperCase("hello")); //"HELLO"
console.log(makeUpperCase("hEllO")); //"HELLO"
