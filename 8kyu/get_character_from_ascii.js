/* https://www.codewars.com/kata/55ad04714f0b468e8200001c
get character from ASCII Value

Instructions:
Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)

should return:

'A'

For ASCII table, you can refer to http://www.asciitable.com/
*/

// My solution
function getChar(c) {
  return String.fromCharCode(c);
}

// Trials
console.log(getChar(55)); //"7"
console.log(getChar(64)); //"@"
console.log(getChar(100)); //"d"
