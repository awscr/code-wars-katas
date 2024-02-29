/* https://www.codewars.com/kata/5ac6932b2f317b96980000ca
Form The Minimum

Instructions:
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
Notes:

    Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
    Input >> Output Examples

minValue ({1, 3, 1})  ==> return (13)

Explanation:

(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)

Explanation:

(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

Explanation:

(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications 
*/

// My solution
// function minValue(values) {
//   let arr = [];

//   values
//     .sort((a, b) => a - b)
//     .forEach((val) => {
//       if (arr.indexOf(val) === -1) arr.push(val);
//     });

//   return +arr.join("");
// }

// Improved solution
function minValue(values) {
  let arr = Array.from(new Set(values));

  return +arr.sort().join("");
}

// Trials
console.log(minValue([1, 3, 1])); //13
console.log(minValue([5, 7, 9, 5, 7])); //579
console.log(minValue([6, 7, 8, 7, 6, 6])); //678
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); //1
