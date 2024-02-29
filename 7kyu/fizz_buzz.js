/* https://www.codewars.com/kata/5300901726d12b80e8000498
Fizz Buzz

Instructions:
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

    If the value is a multiple of 3: use the value "Fizz" instead
    If the value is a multiple of 5: use the value "Buzz" instead
    If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

// My solution
function fizzbuzz(n) {
  let arr = [1];

  for (let i = 2; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }

  return arr;
}

// Trials
console.log(fizzbuzz(3)); //[1, 2, "Fizz"]
console.log(fizzbuzz(6)); //[1, 2, "Fizz", 4, "Buzz", "Fizz"]
console.log(fizzbuzz(15)); //[1, 2, "Fizz", 4, "Buzz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
console.log(fizzbuzz(1)); //[1]
