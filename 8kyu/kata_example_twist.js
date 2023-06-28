/* https://www.codewars.com/kata/525c1a07bb6dda6944000031
Kata Example Twist

Instructions:
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites 1,000 times.
*/

// My solution
// let websites = [];

// for (let i = 0; i < 1000; i++) {
//   websites.push("codewars");
// }

// Improved solution
let websites = new Array(1000).fill("codewars");

// Trials
console.log(websites); //["codewars"] * 1000
