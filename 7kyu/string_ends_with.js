/*https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
String ends with?
Instructions:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

// My solution
function solution(str, ending) {
  return str.endsWith(ending);
}

// Another solution
// function solution(str, ending) {
//   return str.slice(str.length - ending.length) === ending;
// }

// Trials
console.log(solution("abcde", "cde")); //true
console.log(solution("Javascript", "t")); //true
console.log(solution("Hello", "ll")); //false
