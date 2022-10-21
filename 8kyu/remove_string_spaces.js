/* https://www.codewars.com/kata/57eae20f5500ad98e50002c5
Remove String Spaces

Instructions:
Simple, remove the spaces from the string, then return the resultant string.
*/

// My solution
function noSpace(str) {
  return str.replace(/\s/g, "");
}

// Trials
console.log(noSpace("8 j 8     mBliB8g imj   a")); //"8j8mBliB8gimja"
console.log(noSpace("H     ell        o")); //"Hello"
console.log(noSpace("Trrrr eee e  e  eee e     e  ")); //"Trrrreeeeeeeeee"
