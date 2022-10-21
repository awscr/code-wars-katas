/* https://www.codewars.com/kata/5168bb5dfe9a00b126000018
Reversed Strings

Instructions:
Complete the solution so that it reverses the string 
passed into it. 
*/

// My solution
function solution(str) {
  return str.split("").reverse().join("");
}

// Trials
console.log(solution("world")); //"dlrow"
console.log(solution("word")); //"drow"
console.log(solution("javascript")); //"tpircsavaj"
