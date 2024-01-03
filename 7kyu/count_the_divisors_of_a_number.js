/* https://www.codewars.com/kata/542c0f198e077084c0000c2e
Count the divisors of a number

Instructions:
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
Examples (input --> output)

4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted 
in each case.
*/

// My solution
function getDivisorsCnt(n) {
  let divisorCount = 1;

  for (let i = n - 1; i >= 1; i--) {
    if (n % i === 0) divisorCount++;
  }

  return divisorCount;
}

// Trials
console.log(getDivisorsCnt(1)); //1
console.log(getDivisorsCnt(54)); //8
console.log(getDivisorsCnt(10)); //4
console.log(getDivisorsCnt(11)); //2
