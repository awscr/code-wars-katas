/* https://www.codewars.com/kata/57a37f3cbb99449513000cd8
Get number from string

Instructions:
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
*/

// My solution
function getNumberFromString(s) {
  return parseInt(s.match(/\d+/g).join(""));
}

// Trials
console.log(getNumberFromString("1")); //1
console.log(getNumberFromString("123")); //123
console.log(getNumberFromString("this is number: 7")); //7
