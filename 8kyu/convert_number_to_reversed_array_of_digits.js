/* https://www.codewars.com/kata/5583090cbe83f4fd8c000051
Convert number to reversed array of digits

Instructions:
Given a random non-negative number, you have to return the digits of this number 
within an array in reverse order.
*/

// My solution
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

// Trials
console.log(digitize(35231)); //[1, 3, 2, 5, 3]
console.log(digitize(0)); //[0]
console.log(digitize(540495)); //[5, 9, 4, 0, 4, 5]
