/* https://www.codewars.com/kata/55a14f75ceda999ced000048
Template Strings

Instructions:
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '```

Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings
*/

// My solution
let TempleStrings = function (obj, feature) {
  return `${obj} are ${feature}`;
};

// Trials
console.log(TempleStrings("Animals", "Good")); //"Animals are Good"
console.log(TempleStrings("You", "special")); //"You are special"
console.log(TempleStrings("people", "childish")); //"people are childish"
