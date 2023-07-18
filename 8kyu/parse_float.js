/* https://www.codewars.com/kata/57a386117cb1f31890000039
Parse float

Instructions:
Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types 
so be aware.
*/

// My solution
function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

// Trials
console.log(parseF("1")); //1
console.log(parseF("string")); //null
console.log(parseF("54")); //54
console.log(parseF(true)); //null
