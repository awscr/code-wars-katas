/* https://www.codewars.com/kata/55a996e0e8520afab9000055
Who ate the cookie?

Instructions:
For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a 
float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the 
last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

Note: Make sure you return the correct message with correct spaces and punctuation.

Please leave feedback for this kata. Cheers!
*/

// My solution
// function cookie(x) {
//   return typeof x === "string"
//     ? "Who ate the last cookie? It was Zach!"
//     : typeof x === "number"
//     ? "Who ate the last cookie? It was Monica!"
//     : "Who ate the last cookie? It was the dog!";
// }

// Improved solution
function cookie(x) {
  let who =
    typeof x === "string"
      ? "Zach"
      : typeof x === "number"
      ? "Monica"
      : "the dog";

  return `Who are the last cookie? It was ${who}!`;
}

// Trials
console.log(cookie("Ryan")); //"Who ate the last cookie? It was Zach!"
console.log(cookie(26)); //"Who ate the last cookie? It was Monica!"
console.log(cookie(2.3)); //"Who ate the last cookie? It was Monica!"
console.log(cookie(true)); //"Who ate the last cookie? It was the dog!"
