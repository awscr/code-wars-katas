/* https://www.codewars.com/kata/57a4d500e298a7952100035d
Hex to Decimal

Instructions:
Complete the function which converts hex number (given as a string) to a decimal number.
*/

// My solution
function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

// Trials
console.log(hexToDec("1")); //1
console.log(hexToDec("10")); //16
console.log(hexToDec("FF")); //255
console.log(hexToDec("-C")); //-12
