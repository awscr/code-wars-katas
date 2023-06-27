/* https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023
Simple validation of a username with regex

Instructions:
Write a simple regex to validate a username. Allowed characters are:

    lowercase letters,
    numbers,
    underscore

Length should be between 4 and 16 characters (both included).
*/

// My solution
function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username);
}

// Trials
console.log(validateUsr("asddsa")); //true
console.log(validateUsr("Hass")); //false
console.log(validateUsr("____")); //true
console.log(validateUsr("012")); //false
