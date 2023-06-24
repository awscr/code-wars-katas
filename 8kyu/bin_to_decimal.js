/* https://www.codewars.com/kata/57a5c31ce298a7e6b7000334
Bin to Decimal

Instructions:
Complete the function which converts a binary number (given as a string) to a decimal number.
*/

// My solution
function binToDec(bin) {
  return parseInt(bin, 2);
}

// Trials
console.log(binToDec(101)); //5
console.log(binToDec(111)); //7
console.log(binToDec(1)); //1
