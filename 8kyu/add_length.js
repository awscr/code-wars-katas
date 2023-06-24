/* https://www.codewars.com/kata/559d2284b5bb6799e9000047
Add Length

Instructions:
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

// My solution
function addLength(str) {
  return str.split(" ").map((word) => `${word} ${word.length}`);
}

// Trials
console.log(addLength("apple ban")); //"apple 5, ban 3"
console.log(addLength("you will win")); //"you 3, will 4, win 3"
console.log(addLength("web development is so cool")); //"web 3, development 11, is 2, so, 2, cool 4"
