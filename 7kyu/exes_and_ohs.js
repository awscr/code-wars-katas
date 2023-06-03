/* https://www.codewars.com/kata/55908aad6620c066bc00002a
Exes and Ohs

Instructions:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any 
char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// My solution
function XO(str) {
  str = str.toLowerCase();
  let count = [0, 0];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") count[0]++;
    if (str[i] === "o") count[1]++;
  }

  return count[0] === count[1];
}

// Trials
console.log(XO("xo")); //true
console.log(XO("XoxoXoox")); //true
console.log(XO("ooom")); //false
