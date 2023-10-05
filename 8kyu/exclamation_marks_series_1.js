/* https://www.codewars.com/kata/57fae964d80daa229d000126
Exclamation marks series #1: Remove an exclamation mark from the end of string

Instructions:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
Examples

"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

// My solution
// function remove(str) {
//   return str[str.length - 1] === "!" ? str.slice(0, -1) : str;
// }

// Improved solution
const remove = (s) => s.replace(/!$/, "");

// Trials
console.log(remove("Hi!")); //"Hi"
console.log(remove("Hi!!!")); //"Hi!!"
console.log(remove("Hello!!!!!!!")); //"Hello!!!!!!"
console.log(remove("!!Hello!")); //"!!Hello"
console.log(remove("!Oscar")); //"!Oscar"
