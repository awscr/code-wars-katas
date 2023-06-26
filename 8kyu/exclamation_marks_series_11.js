/* https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed
Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

Instructions:
Description:

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples

replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

// My solution
function replace(s) {
  return s.replace(/[aeoiu]/gi, "!");
}

// Trials
console.log(replace("Hi!")); //"H!!"
console.log(replace("!Hi! Hi!")); //"!H!! H!!"
console.log(replace("ABCDE")); //"!BCD!"
console.log(replace("aeiou")); //"!!!!!"
