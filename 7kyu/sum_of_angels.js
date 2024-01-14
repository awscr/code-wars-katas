/* https://www.codewars.com/kata/5a03b3f6a1c9040084001765
Sum of Angles

Instructions:
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/

// My solution
function angle(n) {
  return 180 * (n - 2);
}

// Trials
console.log(angle(3)); //180
console.log(angle(5)); //
console.log(angle(4)); //360
