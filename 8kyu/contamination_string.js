/* https://www.codewars.com/kata/596fba44963025c878000039
Contamination #1 -String-

Instructions:
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.
*/

// My Solution
function contamination(text, char) {
  return char.repeat(text.length);
}

// Trials
console.log(contamination("abc", "z")); //"zzz"
console.log(contamination("", "z")); //""
console.log(contamination("_3ebzgh4", "&")); //"&&&&&&&&"
