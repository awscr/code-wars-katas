/* https://www.codewars.com/kata/514aa0dc21607ae236000017
Shifty Closures

Instructions:
Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?
*/

// My solution
let name;

let greet_abe = function () {
  return "Hello, " + "Abe" + "!";
};

let greet_ben = function () {
  return "Hello, " + "Ben" + "!";
};
