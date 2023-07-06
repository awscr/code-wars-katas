/* https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
Sum of Multiples

Instructions:
 Find the sum of all multiples of n below m
Keep in Mind

    n and m are natural numbers (positive integers)
    m is excluded from the multiples
*/

// My solution
function sumMul(n, m) {
  let sum = 0;

  for (let i = n; i < m; i += n) {
    sum += i;
  }

  return sum;
}

// Trials
console.log(sumMul(0, 0)); //0
console.log(sumMul(2, 9)); //20
console.log(sumMul(4, 123)); //1860
console.log(sumMul(3, 13)); //30
