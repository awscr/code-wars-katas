/* https://www.codewars.com/kata/56efc695740d30f963000557
altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Instructions:
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your 
selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 
For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/

//My solution
// String.prototype.toAlternatingCase = function () {
//   let alternateStr = "";

//   for (let i = 0; i < this.length; i++) {
//     if (this[i] === this[i].toUpperCase()) {
//       alternateStr += this[i].toLowerCase();
//     } else {
//       alternateStr += this[i].toUpperCase();
//     }
//   }

//   return alternateStr;
// };

// Improved solution
String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
};

// Trials
console.log(toAlternatingCase("hello world")); //"HELLO WORLD"
console.log(toAlternatingCase("HeLLo WoRLD")); //"hEllO wOrld"
console.log(toAlternatingCase("1a2b3c4d5e")); //"1A2B3C4D5E"
