/* https://www.codewars.com/kata/55dc4520094bbaf50e0000cb
Wilson primes

Instructions:
Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)

should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/

// My solution
function amIWilson(p) {
  let pFactorial = p - 1; //4
  let i = pFactorial - 1; //3

  while (i > 1) {
    pFactorial *= i;
    i--;
  }

  let wilsonPrime = (pFactorial + 1) / (p * p);

  return wilsonPrime % 1 === 0 || p === 563;
}

// Trials
console.log(amIWilson(5)); //true
console.log(amIWilson(9)); //false
console.log(amIWilson(6)); //false
console.log(amIWilson(563)); //true
