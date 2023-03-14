/* https://www.codewars.com/kata/56b1f01c247c01db92000076
Double Char

Instructions:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!
*/

// My solution
function doubleChar(str) {
  let doubleCharStr = "";

  str.split("").forEach((letter) => {
    doubleCharStr += letter + letter;
  });

  return doubleCharStr;
}

// Trials
console.log(doubleChar("Hello")); //"HHeelllloo"
console.log(doubleChar("maathh")); //"mmaaaatthhhh"
console.log(doubleChar("code")); //"ccooddee"
