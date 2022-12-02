/* https://www.codewars.com/kata/57cc975ed542d3148f00015b
You only need one - Beginner

Instructions:
You will be given an array a and a value x. All you need to do is check whether the 
provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

// My solution
// function check(a, x) {
//   return a.indexOf(x) !== -1;
// }

// Another solution
const check = (a, x) => a.includes(x);

// Trials
console.log(check([66, 101], 66)); //true
console.log(check(["t", "e", "s", "t"], "e")); //true
console.log(check([101, 45, 75, 105, 99, 107], 107)); //true
