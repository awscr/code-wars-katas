/* https://www.codewars.com/kata/5b39e3772ae7545f650000fc
Remove duplicate words

Instructions:
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

// My solution
function removeDuplicateWords(s) {
  return Array.from(new Set(s.split(" "))).join(" ");
}

// Trials
console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'"
  )
); //"alpha beta gamma delta"
console.log(
  removeDuplicateWords("code javascript python code ruby github github github ")
); //"code javascript python github"
console.log(removeDuplicateWords("my name is my name john is john name is")); //"my name is john"
