/* https://www.codewars.com/kata/572b6b2772a38bc1e700007a
ASCII Total

Instructions:
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291
*/

// My solution
function uniTotal(str) {
  return str.split("").reduce((total, c) => (total += c.charCodeAt(0)), 0);
}

// Trials
console.log(uniTotal("a")); //97
console.log(uniTotal("aaa")); //291
console.log(uniTotal("ajhsdjhasd")); //1044
console.log(uniTotal("iweutriuweiufuijweifuwijefiuweiufj")); //3715
console.log(uniTotal("")); //0
