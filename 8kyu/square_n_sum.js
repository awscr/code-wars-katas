/* https://www.codewars.com/kata/515e271a311df0350d00000f
Square(n) Sum

Instructions:
Complete the square sum function so that it squares each number passed into it and 
then sums the results together.
*/

// My solution
function squareSum(numbers) {
  return numbers.reduce((sum, num) => {
    return sum + num ** 2;
  }, 0);
}

// Trials
console.log(squareSum([1, 2])); //5
console.log(squareSum([])); //0
console.log(squareSum([0, 3, 4, 5])); //50
