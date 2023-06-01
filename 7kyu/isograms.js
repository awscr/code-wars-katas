/* https://www.codewars.com/kata/54ba84be607a92aa900000f1
Isograms

Instructions:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains 
only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

// My solution
function isIsogram(str) {
  return new Set(str.toLowerCase()); //.size == str.length;
}

// Trials
console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("aba")); //false
console.log(isIsogram("")); //true
