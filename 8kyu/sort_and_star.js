/* https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
Sort and Star

Instructions:
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the 
first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

// My solution
// function twoSort(s) {
//   const firstValue = s.sort()[0];
//   let newStr = "";

//   for (let i = 0; i < firstValue.length; i++) {
//     newStr += firstValue[i];

//     if (i !== firstValue.length - 1) {
//       newStr += "***";
//     }
//   }

//   return newStr;
// }

// Improved solution
function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

// Trials
console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
); //"b***i***t***c***o***i***n"
console.log(
  twoSort([
    "turns",
    "out",
    "random",
    "test",
    "cases",
    "are",
    "easier",
    "than",
    "writing",
    "out",
    "basic",
    "ones",
  ])
); //"a***r***e"
// console.log(twoSort()); //
