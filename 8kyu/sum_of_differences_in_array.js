/* https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
Sum of differences in array

Instructions:
Your task is to sum the differences between consecutive pairs in the array in descending order.
Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

// My solution
function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// Trials
console.log(sumOfDifferences([1, 2, 10])); //9
console.log(sumOfDifferences([-3, -2, -1])); //2
console.log(sumOfDifferences([])); //0
