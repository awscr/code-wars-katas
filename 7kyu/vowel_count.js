/* https://www.codewars.com/kata/54ff3102c1bad923760001f3
Vowel Count

Instructions:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// My solution
function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      vowelCount++;
    }
  }

  return vowelCount;
}

// Improved solution
// function getCount(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }

// Trials
console.log(getCount("abracadabra")); //5
console.log(getCount("ae")); //2
console.log(getCount("javascript")); //3
