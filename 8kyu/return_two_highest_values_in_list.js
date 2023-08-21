/* https://www.codewars.com/kata/57ab3c09bb994429df000a4a
Return Two Highest Values in List

Instructions:
In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as 
possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/

// My solution
function twoHighest(arr) {
  if (arr.length < 2) return arr;

  let uniqArr = [...new Set(arr)].sort((a, b) => a - b);

  return [uniqArr[uniqArr.length - 1], uniqArr[uniqArr.length - 2]];
}

// Trials
console.log(twoHighest([])); //[]
console.log(twoHighest([15, 20, 20, 17])); //[20, 17]
console.log(twoHighest([37])); //[37]
console.log(twoHighest([1, 1, 1]));
[1];
