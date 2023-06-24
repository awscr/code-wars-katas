/* https://www.codewars.com/kata/545afd0761aa4c3055001386
Enumerable Magic #25 - Take the First N Elements

Instructions:
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/

// My solution
function take(arr, n) {
  return arr.slice(0, n);
}

// Trials
console.log(take([1, 2, 3, 4, 5, 6], 3)); //[1, 2, 3]
console.log(take([100, -1, 0, 1, 23, 44, 21, 100, 45], 1)); //[100]
console.log(take([], 1)); //[]
