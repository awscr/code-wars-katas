/* https://www.codewars.com/kata/5866fc43395d9138a7000006/train/javascript
Ensure question

Instructions:
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question 
mark, in which case, returns the original string.
*/

// My solution
// function ensureQuestion(s) {
//   return s.split("?").join("") + "?";
// }

// Improved solution
function ensureQuestion(s) {
  return s.endsWith("?") ? s : s + "?";
}

// Trials
console.log(ensureQuestion("")); //"?"
console.log(ensureQuestion("Yes")); //"Yes?"
console.log(ensureQuestion("No?")); //"No?"
