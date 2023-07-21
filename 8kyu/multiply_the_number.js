/* https://www.codewars.com/kata/5708f682c69b48047b000e07
Multiply the number

Instructions:
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, 
for example:
multiply(3)==15 // 3 * 5¹
multiply(10)==250 // 10 * 5²
multiply(200)==25000 // 200 * 5³
multiply(0)==0 // 0 * 5¹
multiply(-3)==-15 // -3 * 5¹
*/

// My solution
function multiply(num) {
  return num * Math.pow(5, (Math.abs(num) + "").length);
}

// Trials
console.log(multiply(10)); //250
console.log(multiply(5)); //25
console.log(multiply(0)); //0
console.log(multiply(-2)); //-10
console.log(multiply(200)); //25000
