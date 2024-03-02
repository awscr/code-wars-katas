/*
https://www.codewars.com/kata/59706036f6e5d1e22d000016
Love vs friendship

Instructions:
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.
*/

// My solution
// function wordsToMarks(str) {
//   const abcArr = "abcdefghijklmnopqrstuvwxyz".split("");

//   return str
//     .split("")
//     .reduce((acc, curr) => (acc += abcArr.indexOf(curr) + 1), 0);
// }

// Improved solution
const wordsToMarks = (s) =>
  [...s].reduce((res, c) => (res += c.charCodeAt() - 96), 0);

// Trials
console.log(wordsToMarks("attitude")); //100
console.log(wordsToMarks("friends")); //75
console.log(wordsToMarks("family")); //"66"
console.log(wordsToMarks("selfness")); //99
