/*https://www.codewars.com/kata/54598e89cbae2ac001001135/train/javascript
Enumerable Magic #2 - True for Any?

Instructions:
Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any 
item in the array. If the array is empty, the function should return false.

Ruby: If you get stuck, you can read up here:
http://www.rubycuts.com/enum-any
*/

// My solution
function any(arr, fun) {
  return arr.some(fun);
}

// Trials
console.log(
  any([1, 2, 3, 4], function (v, i) {
    return v > 3;
  })
); //true
console.log(
  any([1, 2, 3, 4], function (v, i) {
    return v > 4;
  })
); //false
