/* https://www.codewars.com/kata/573f5c61e7752709df0005d2
Merging sorted integer arrays (without duplicates)

Instructions:
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have 
any duplicate.
*/

// My solution
function mergeArrays(a, b) {
  return Array.from(new Set(a.concat(b).sort((a, b) => a - b)));
}

// Trials
console.log(mergeArrays([1, 3, 5], [2, 4, 6])); //1, 2, 3, 4, 5, 6]
console.log(mergeArrays([2, 4, 8], [2, 4, 6])); //[2, 4, 6, 8]
