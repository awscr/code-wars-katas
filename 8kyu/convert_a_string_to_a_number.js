/* https://www.codewars.com/kata/544675c6f971f7399a000e79
Convert a String to a Number!

Instructions:
We need a function that can transform a string into a number. What ways of achieving 
this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid 
representation of an integral number.
*/

// My solution
function stringToNumber(str) {
  return Number(str);
}

// Trials
console.log(stringToNumber("1234")); //1234
console.log(stringToNumber("0")); //0
console.log(stringToNumber("-7")); //-7
