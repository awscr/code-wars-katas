/* https://www.codewars.com/kata/5808e2006b65bff35500008f
Find the position!

Instructions:
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

// My solution
function position(letter) {
  return `Position of alphabet: ${letter.toLowerCase().charCodeAt() - 96}`;
}

// Trials
console.log(position("a")); //"Position of alphabet: 1"
console.log(position("b")); //"Position of alphabet: 1"
console.log(position("z")); //"Position of alphabet: 26"
console.log(position("e")); //"Position of alphabet: 5"
