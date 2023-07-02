/* https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
Check same case

Instructions:
Write a function that will check if two given characters are the same case.

    If either of the characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0

Examples

'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

// My solution
function sameCase(a, b) {
  if (!/^[a-zA-Z]+$/.test(a) || !/^[a-zA-Z]+$/.test(b)) return -1;

  let case1, case2;

  if (a === a.toUpperCase()) {
    case1 = "uppercase";
  } else {
    case1 = "lowercase";
  }

  if (b === b.toUpperCase()) {
    case2 = "uppercase";
  } else {
    case2 = "lowercase";
  }

  return case1 === case2 ? 1 : 0;
}

// Trials
console.log(sameCase("C", "B")); //1
console.log(sameCase("A", "s")); //0
console.log(sameCase("Z", "Z")); //1
console.log(sameCase("g", "6")); //-1
console.log(sameCase("y", "D")); //0
console.log(sameCase("F", "@")); //-1
