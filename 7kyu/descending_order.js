/* https://www.codewars.com/kata/5467e4d82edf8bbf40000155
Descending Order

Instructions:
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, 
rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

// My solution
function descendingOrder(n) {
  return +String(n).split("").sort().reverse().join("");
}

// Trials
console.log(descendingOrder(111)); //111
console.log(descendingOrder(15)); //51
console.log(descendingOrder(123456789)); //987654321
