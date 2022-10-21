/* https://www.codewars.com/kata/53369039d7ab3ac506000467
Convert boolean values to strings 'Yes' or 'No'.

Instructions:
Complete the method that takes a boolean value and return 
a "Yes" string for true, or a "No" string for false.
*/

// My solution
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// Trials
console.log(boolToWord(false)); //"No"
console.log(boolToWord(true)); //"Yes"
