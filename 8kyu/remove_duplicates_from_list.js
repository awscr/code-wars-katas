/* https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
Remove duplicates from list

Instructions:
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

// My solution
function distinct(a) {
  return [...new Set(a)];
}

// Trials
console.log(distinct([1])); //[1]
console.log(distinct([1, 2])); //[1, 2]
console.log(distinct([1, 1, 2])); //[1, 2]
