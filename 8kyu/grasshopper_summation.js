/* https://www.codewars.com/kata/55d24f55d7dd296eb9000030
Grasshopper - Summation

Instructions:
Write a program that finds the summation of every number from 1 to num. The number 
will always be a positive integer greater than 0.
*/

// My solution
// const summation = (num) => {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }

//   return sum;
// };

// Improved solution
function summation(num) {
  return (num * (num + 1)) / 2;
}

// Trials
console.log(summation(1)); //1
console.log(summation(2)); //3
console.log(summation(8)); //36
