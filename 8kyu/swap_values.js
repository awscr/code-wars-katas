/* https://www.codewars.com/kata/5388f0e00b24c5635e000fc6
Swap Values

Instructions:
I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't 
changing.

Can you figure out what's wrong here?
*/

// My solution
function swapValues(arr, num) {
  return arr.reverse();
}

// Trials
console.log(swapValues([0, 1])); //[1, 0]
console.log(swapValues([100, 5])); //[5, 100]
console.log(swapValues([1, 2])); //[2, 1]
