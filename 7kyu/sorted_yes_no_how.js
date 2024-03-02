/* https://www.codewars.com/kata/580a4734d6df748060000045
Sorted? yes? no? how?

Instructions:
Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
*/

// My solution
function isSortedAndHow(arr) {
  const sortedArr = arr.toSorted((a, b) => a - b);

  return arr + "" === sortedArr + ""
    ? "yes, ascending"
    : arr.reverse() + "" === sortedArr + ""
    ? "yes, descending"
    : "no";
}

// Trials
console.log(isSortedAndHow([1, 2])); //"yes, ascending"
console.log(isSortedAndHow([15, 7, 3, -8])); //"yes, descending"
console.log(isSortedAndHow([4, 2, 30])); //"no"
console.log(isSortedAndHow([20, 21, 22, 23, 24, 25, 26])); //"yes, ascending"
