/* https://www.codewars.com/kata/5715eaedb436cf5606000381
Sum of positive

Instructions:
You get an array of numbers, return the sum of all of the positives ones.

Note: if there is nothing to sum, the sum is default to 0.
*/

// My solution
function positiveSum(arr) {
  if (arr === []) return 0;

  return arr.reduce((sum, num) => {
    return sum + num;
  }, 0);
}

// Trials
console.log(positiveSum([1, 2, 3, 4])); //10
console.log(positiveSum([0, 100, 2, -4, 5])); //103
console.log(positiveSum([])); //0
console.log(positiveSum([13])); //13
