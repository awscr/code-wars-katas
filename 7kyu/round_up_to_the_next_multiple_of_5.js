/* https://www.codewars.com/kata/55d1d6d5955ec6365400006d
Round up to the next multiple of 5

Instructions:
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.

Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/

// My solution
function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

// Trials
console.log(roundToNext5(0)); //0
console.log(roundToNext5(2)); //5
console.log(roundToNext5(21)); //25
console.log(roundToNext5(-5)); //-5
console.log(roundToNext5(-2)); //0
