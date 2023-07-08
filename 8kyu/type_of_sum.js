/* https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba
Type of sum

Instructions:
Return the type of the sum of the two arguments
*/

// My solution
function typeOfSum(a, b) {
  return typeof (a + b);
}

// Trials
console.log(typeOfSum(12, 1)); //"number"
console.log(typeOfSum("d", 1)); //"string"
console.log(typeOfSum(true, 1)); //number
console.log(typeOfSum("s", false)); //string
console.log(typeOfSum(null, false)); //number
