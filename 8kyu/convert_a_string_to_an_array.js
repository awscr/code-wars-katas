/* https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
Convert a string to an array

Instructions:
Write a function to split a string and convert it into an array of words.
Examples (Input ==> Output):

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// My solution
function stringToArray(string) {
  return string.split(" ");
}

// Trials
console.log(stringToArray("Robin Singh")); //["Robin", "Singh"]
console.log(stringToArray("I love arrays they are my favorite")); //["I", "love", "arrays", "they", "are", "my", "favorite"]
console.log(stringToArray("")); //[""]
