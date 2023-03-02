/* https://www.codewars.com/kata/57a0885cbb9944e24c00008e
Remove exclamation marks

Instructions:
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

// My solution
function removeExclamationMarks(s) {
  return s.replaceAll("!", "");
}

// Another solution
function removeExclamationMarks(s) {
  return s.split("!").join("");
}

// Trials
console.log(removeExclamationMarks("Hello world!")); //"Hello world"
console.log(removeExclamationMarks("awscr!!! ! !")); //"awscr"
console.log(removeExclamationMarks("java!!! script  ")); //"java script"
