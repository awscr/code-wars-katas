/* https://www.codewars.com/kata/5704aea738428f4d30000914
Triple Trouble

Instructions:
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of 
the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
*/

// My solution
function tripleTrouble(one, two, three) {
  let finalStr = "";

  for (let i = 0; i < one.length; i++) {
    finalStr += one[i];
    finalStr += two[i];
    finalStr += three[i];
  }

  return finalStr;
}

// Trials
console.log(tripleTrouble("aaa", "bbb", "ccc")); //"abcabcabcabcabcabc"
console.log(tripleTrouble("aaaaaa", "bbbbbb", "cccccc")); //"abcabcabcabcabcabc"
console.log(tripleTrouble("LLh", "euo", "xtr")); //"LexLuthor"
