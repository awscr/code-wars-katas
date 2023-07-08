/* https://www.codewars.com/kata/56a946cd7bd95ccab2000055
Regex count lowercase letters

Instructions:
Your task is simply to count the total number of lowercase letters in a string.
*/

// My solution
function lowercaseCount(str) {
  return (str.match(/[a-z]/g) || []).length;
}

// Trials
console.log(lowercaseCount("abc")); //3
console.log(lowercaseCount("")); //0
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")); //0
console.log(lowercaseCount("abcABC123")); //3
