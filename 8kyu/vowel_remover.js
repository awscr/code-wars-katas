/* https://www.codewars.com/kata/5547929140907378f9000039
Vowel remover

Instructions:
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

    don't worry about uppercase vowels
    y is not considered a vowel for this kata
*/

// My solution
// function shortcut(string) {
//   const vowels = ["a", "e", "i", "o", "u"];

//   return string
//     .split("")
//     .filter((letter) => vowels.indexOf(letter) === -1)
//     .join("");
// }

// Improved solution
function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}

// Trials
console.log(shortcut("hello")); //"hll"
console.log(shortcut("complain")); //"cmpln"
console.log(shortcut("HOW are YOU toDAY")); //"HOW r YOU tDAY"
