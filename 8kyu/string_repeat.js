/* https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
String repeat

Instructions:
Write a function that accepts an integer n and a string s as parameters, and returns 
a string of s repeated exactly n times.
*/

// My solution
function repeatStr(n, str) {
  return str.repeat(n);
}

// Trials
console.log(repeatStr(6, "I")); //"IIIIII"
console.log(repeatStr(5, "Hello")); //"HelloHelloHelloHelloHello"
console.log(repeatStr(2, "Js")); //"JsJs"
