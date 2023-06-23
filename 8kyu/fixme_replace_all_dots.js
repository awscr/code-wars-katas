/* https://www.codewars.com/kata/596c6eb85b0f515834000049
FIXME: Replace all dots

Instructions:
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.
Task

Fix the bug so we can all go home early.
Notes

String str will never be null.
*/

// My solution
// let replaceDots = (str) => {
//   return str.replaceAll(".", "-");
// };

// Regex solution
let replaceDots = function (str) {
  return str.replace(/\./g, "-");
};

// Trials
console.log(replaceDots("one.two.three")); //"one-two-three"
console.log(replaceDots("hell....o")); //"hell----o"
console.log(replaceDots("try. again..")); //"try- again--"
