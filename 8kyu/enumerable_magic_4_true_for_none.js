/* https://www.codewars.com/kata/545993ee52756d98ca0010e1
Enumerable Magic #4 - True for None?

Instructions:
Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of 
the items in the array. An empty list should return true.
*/

// My solution
function none(arr, fun) {
  return !arr.some(fun);
}
