/* https://www.codewars.com/kata/57ab2d6072292dbf7c000039
Polish Alphabet

Instructions:
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z

and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/

// My solution
// function correctPolishLetters(str) {
//   const diacritics = {
//     ą: "a",
//     ć: "c",
//     ę: "e",
//     ł: "l",
//     ń: "n",
//     ó: "o",
//     ś: "s",
//     ź: "z",
//     ż: "z",
//   };

//   return str
//     .split("")
//     .map((c) => (diacritics[c] ? diacritics[c] : c))
//     .join("");
// }

// Improved solution
function correctPolishLetters(str) {
  var dict = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  return str.replace(/[ąćęłńóśźż]/g, (match) => dict[match]);
}

// Trials
console.log(correctPolishLetters("Jędrzej Błądziński")); //"Jedrzej Bladzinski"
console.log(correctPolishLetters("Lech Wałęsa")); //"Lech Walesa"
console.log(correctPolishLetters("Maria Skłodowska-Curie")); //"Maria Sklodowska-Curie"
