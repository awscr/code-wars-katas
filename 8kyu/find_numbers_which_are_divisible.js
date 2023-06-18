/* https://www.codewars.com/kata/55edaba99da3a9c84000003b
Find numbers which are divisible by given number

Instructions:
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers 
and the second is the divisor.
Example(Input1, Input2 --> Output)

[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/

// My solution
function divisibleBy(numbers, divisor) {
  return numbers.filter((num) => num % divisor === 0);
}

// Trials
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2)); //[2, 4, 6]
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4)); //[0 ,4]
console.log(divisibleBy([0], 4)); //[0]
