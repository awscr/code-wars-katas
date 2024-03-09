/* https://www.codewars.com/kata/585b1fafe08bae9988000314
Digits explosion

Instructions:
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value. 

Examples

"312" should return "333122"

"102269" should return "12222666666999999999"
*/

// My solution
function explode(s) {
  let str = "";

  s.split("").forEach((num) => (str += num.repeat(+num)));

  return str;
}

// Trials
console.log(explode("312")); //"333122"
console.log(explode("102269")); //"12222666666999999999"
console.log(explode("000")); //""
console.log(explode("123")); //"122333"
