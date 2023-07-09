/* https://www.codewars.com/kata/567bf4f7ee34510f69000032
Regexp Basics - is it a digit?

Instructions:
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/

// My solution
// String.prototype.digit = function () {
//   if (this.length >= 2) return false;

//   return /[0-9]/.test(this);
// };

// Improved solution
String.prototype.digit = function () {
  return /^\d$/.test(this);
};

// Trials
console.log("".digit()); //false
console.log("7".digit()); //true
console.log("a5".digit()); //false
console.log("14".digit()); //false
