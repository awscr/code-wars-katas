/* https://www.codewars.com/kata/56dec885c54a926dcd001095
Opposite number

Instructions:
Very simple, given an integer or a floating-point number, 
find its opposite.
*/

// My solution
function opposite(number) {
  return number !== 0 ? -number : 0;
}

// Trials
console.log(opposite(33)); //-33
console.log(opposite(-2)); //2
console.log(opposite(0)); //0
