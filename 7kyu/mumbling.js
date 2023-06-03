/* https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
Mumbling

Instructions:
This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// My solution
function accum(s) {
  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    newStr += s[i].toUpperCase() + s.toLowerCase().repeat(i);

    if (i !== s.length - 1) newStr += "-";
  }

  return newStr;
}

// Trials
console.log(accum("ZpglnRxqenU")); //"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("Hello")); //"H-Ee-Lll-Oooo"
console.log(accum("EvidjUnokmM")); //"E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
