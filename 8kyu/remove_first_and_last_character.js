/* https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
Remove First and Last Character

Instructions:
It's pretty straightforward. Your goal is to create a function that removes the first 
and last characters of a string. You're given one parameter, the original string. You 
don't have to worry with strings with less than two characters.
*/

// My solution
// function removeChar(str) {
//   return str.slice(1, str.length - 1);
// }

// Another solution
function removeChar(str) {
  return str.slice(1, -1);
}

// Trials
console.log(removeChar("eloquent")); //"loquen"
console.log(removeChar("Hello")); //"ell"
console.log(removeChar("tree")); //"re"
