/* https://www.codewars.com/kata/57faece99610ced690000165
Exclamation marks series #2: Remove all exclamation marks from the end of sentence

Instructions:
 Remove all exclamation marks from the end of sentence.
*/

// My solution
function remove(str) {
  return str.replace(/!+$/, "");
}

// Trials
console.log(remove("Hi!")); //"Hi"
console.log(remove("hi!!!")); //"hi"
console.log(remove("Hi! Hi!")); //"Hi! Hi"
console.log(remove("hi")); //"hi"
