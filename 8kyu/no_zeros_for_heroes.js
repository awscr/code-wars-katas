/* https://www.codewars.com/kata/570a6a46455d08ff8d001002
No zeros for heros

Instructions:
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

Zero alone is fine, don't worry about it. Poor guy anyway
*/

// My solution
// function noBoringZeros(n) {
//   return +`${n}`.replace(/0*$/, "");
// }

// Improved solution
function noBoringZeros(n) {
  while (n % 10 == 0 && n != 0) {
    n /= 10;
  }
  return n;
}

// Trials
console.log(noBoringZeros(1450)); //145
console.log(noBoringZeros(960000)); //96
console.log(noBoringZeros(-105)); //-105
console.log(noBoringZeros(0)); //0
