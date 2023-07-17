/* https://www.codewars.com/kata/56d49587df52101de70011e4
Leonardo Dicaprio and Oscars

Instructions:
You have to write a function that describe Leo:

function leo(oscar) {

}

if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!"
*/

// My solution
function leo(oscar) {
  if (oscar === 88) return "Leo finally won the oscar! Leo is happy";
  if (oscar === 86) return "Not even for Wolf of wallstreet?!";
  if (oscar < 88) return "When will you give Leo an Oscar?";

  return "Leo got one already!";
}

// Trials
console.log(leo(89)); //"Leo got one already!"
console.log(leo(88)); //"Leo finally won the oscar! Leo is happy"
console.log(leo(87)); //"When will you give Leo an Oscar?"
console.log(leo(86)); //"Not even for Wolf of wallstreet?!"