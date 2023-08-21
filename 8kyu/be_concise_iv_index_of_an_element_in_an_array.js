/* https://www.codewars.com/kata/5703c093022cd1aae90012c9
Be Concise IV - Index of an element in an array

Instructions:
Provided is a function Kata which accepts two parameters in the following order: array, element and returns the index of the element if found and 
"Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. 
(no more than 161) You may assume that all array elements are unique.
*/

// My solution
function find(a, e) {
  let i = a.indexOf(e);

  return i !== -1 ? i : "Not found";
}

// Trials
const arr = [2, 3, 5, 7, 11];
console.log(find(arr, 5)); //2
console.log(find(arr, 11)); //4
console.log(find(arr, 8)); //"Not found"
