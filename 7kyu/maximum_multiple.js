/* https://www.codewars.com/kata/5aba780a6a176b029800041c
Maximum Multiple

Instructions:
Given a Divisor and a Bound , Find the largest integer N , Such That ,
Conditions :

    N is divisible by divisor

    N is less than or equal to bound

    N is greater than 0.

Notes

    The parameters (divisor, bound) passed to the function are only positive values .
    It's guaranteed that a divisor is Found .

Input >> Output Examples

divisor = 2, bound = 7 ==> return (6)

Explanation:

(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

divisor = 10, bound = 50 ==> return (50)

Explanation:

(50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

divisor = 37, bound = 200 ==> return (185)

Explanation:

(185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .
*/

// My solution
// function maxMultiple(divisor, bound) {
//   let maxMultiple = divisor;

//   while (maxMultiple <= bound) {
//     maxMultiple += divisor;
//   }

//   return maxMultiple - divisor;
// }

// Improved solution
function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

// Trials
console.log(maxMultiple(2, 7)); //6
console.log(maxMultiple(7, 17)); //14
console.log(maxMultiple(37, 200)); //185
console.log(maxMultiple(7, 100)); //98
