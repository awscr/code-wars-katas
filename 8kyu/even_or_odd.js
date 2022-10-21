/* https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
Even or Odd

Instructions:
Create a function that takes an integer as an argument and 
returns "Even" for even numbers or "Odd" for odd numbers.
*/

// My solution
function even_or_odd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// Trials
console.log(even_or_odd(2)); //"Even"
console.log(even_or_odd(7)); //"Odd"
console.log(even_or_odd(100)); //"Even"
