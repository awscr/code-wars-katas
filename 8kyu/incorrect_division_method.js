/* https://www.codewars.com/kata/54d1c59aba326343c80000e7
Incorrect division method

Instructions:
This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.
*/

// My solution
const solve = (x, y) => x / y;

// Trials
console.log(solve(2, 1)); //2
console.log(solve(2, 4)); //0.5
console.log(solve(9999, 11)); //909
console.log(solve(0, 8)); //0
