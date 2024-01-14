/* https://www.codewars.com/kata/58b8c94b7df3f116eb00005b
Simple Fun #176: Reverse Letter

Instructions:
 Given a string str, reverse it and omit all non-alphabetic characters.
Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".
Input/Output

    [input] string str

A string consists of lowercase latin letters, digits and symbols.

    [output] a string
*/

// My solution
function reverseLetter(str) {
  return str
    .split("")
    .filter((val) => /[a-zA-Z]/.test(val))
    .reverse()
    .join("");
}

// Trials
console.log(reverseLetter("krishan")); //"nahsirk"
console.log(reverseLetter("ultr53o?n")); //"nortlu"
console.log(reverseLetter("ab23c")); //"cba"
console.log(reverseLetter("oscar")); //"racso"
