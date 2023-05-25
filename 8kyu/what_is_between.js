/* https://www.codewars.com/kata/55ecd718f46fba02e5000029 
What is between?

Instructions:
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

// My solution
function between(a, b) {
  let arr = [];

  for (a; a <= b; a++) {
    arr.push(a);
  }

  return arr;
}

// Trials
console.log(between(1, 4)); //[1, 2, 3, 4]
console.log(between(-2, 2)); //[-2, -1, 0, 1, 2]
console.log(between(100, 105)); //[100, 101, 102, 103, 104, 105]
