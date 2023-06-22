/* https://www.codewars.com/kata/55a5bfaa756cfede78000026
Super Duper Easy

Instructions:
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/

// My solution
// function problem(x) {
//   if (typeof x === "string") return "Error";

//   return x * 50 + 6;
// }

// Improved solution
const problem = (x) => (typeof x === "string" ? "Error" : x * 50 + 6);

// Trials
console.log(problem(1)); //56
console.log(problem(1.2)); //66
console.log(problem(0.03)); //7.5
console.log(problem(-3)); //-144
