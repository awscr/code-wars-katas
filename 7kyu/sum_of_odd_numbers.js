/* https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
Sum of odd numbers

Instructions:
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

// My solution
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

5;
// Trials
console.log(rowSumOddNumbers(1)); //1
console.log(rowSumOddNumbers(42)); //74088
console.log(rowSumOddNumbers(5)); //125
console.log(rowSumOddNumbers(2)); //8
