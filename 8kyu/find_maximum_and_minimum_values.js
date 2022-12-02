/* https://www.codewars.com/kata/577a98a6ae28071780000989
Find Maximum and Minimum Values of a List

Instructions:
Your task is to make two functions ( max and min, or maximum and minimum, etc., 
depending on the language ) that receive a list of integers as input, and return 
the largest and lowest number in that list, respectively.
Examples (Input -> Output)

Notes
  You may consider that there will not be any empty arrays/vectors.
*/

// My solution
const min = function (list) {
  return Math.min(...list);
};

const max = function (list) {
  return Math.max(...list);
};

// Trials
console.log(min([-52, 56, 30, 29, -54, 0, -110])); //-110
console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); //566
console.log(max([5])); //5
