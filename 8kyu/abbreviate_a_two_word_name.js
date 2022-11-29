/* https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
Abbreviate a Two Word Name

Instructions:
Write a function to convert a name into initials. This kata strictly takes two words 
with one space in between them.

The output should be two capital letters with a dot separating them.
*/

// My solution
// function abbrevName(name) {
//   const nameArr = name.split(" ");

//   return `${nameArr[0][0].toUpperCase()}.${nameArr[1][0].toUpperCase()}`;
// }

// Improved solution
function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}

// Trials
console.log(abbrevName("Sam Harris")); //"S.H"
console.log(abbrevName("patrick feeney")); //P.F
console.log(abbrevName("Gina smith")); //G.S
