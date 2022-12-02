/* https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
Invert values

Instructions:
Given a set of numbers, return the additive inverse of each. Each positive becomes 
negatives, and the negatives become positives.

You can assume that all values are integers. Do not mutate the input array/list.
*/

// My solution
function invert(arr) {
  return arr.map((num) => {
    return -num;
  });
}

// Trials
console.log(invert([1, 2, 3, 4, 5])); //[-1,-2,-3,-4,-5]
console.log(invert([1, -2, 3, -4, 5])); //[-1,2,-3,4,-5]
console.log(invert([])); //[]
