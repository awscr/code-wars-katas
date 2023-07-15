/* https://www.codewars.com/kata/559f80b87fa8512e3e0000f5
Are arrow functions odd?

Instructions:
Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []
*/

// My solution
function odds(values) {
  return values.filter((val) => val % 2 === 1);
}

// Trials
console.log(odds([2, 4, 6])); //[]
console.log(odds([1, 2, 3, 4, 5, 6])); //[1, 3, 5]
console.log(odds([55, 2, 1, 0, 6, 8, 22, 8, 67, 0, 3])); //[55, 1, 67, 3]
