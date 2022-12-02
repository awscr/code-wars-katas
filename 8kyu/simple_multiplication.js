/* https://www.codewars.com/kata/583710ccaa6717322c000105
Simple multiplication

Instructions:
This kata is about multiplying a given number by eight if it is an even number and by 
nine otherwise.
*/

// My solution
function simpleMultiplication(number) {
  return number * (number % 2 === 0 ? 8 : 9);
}

// Trials
console.log(simpleMultiplication(2)); //16
console.log(simpleMultiplication(5)); //45
console.log(simpleMultiplication(8)); //64
