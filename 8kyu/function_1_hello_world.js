/* https://www.codewars.com/kata/523b4ff7adca849afe000035
Function 1 - hello world

Instructions:
Make a simple function called greet that returns the most-famous "hello world!".

Style Points

Sure, this is about as easy as it gets. But how clever can you be to create the most 
creative hello world you can think of? What is a "hello world" solution you would 
want to show your friends?
*/

// My solution
function greet() {
  return String.fromCharCode(
    104,
    101,
    108,
    108,
    111,
    32,
    119,
    111,
    114,
    108,
    100,
    33
  );
}

// Trials
console.log(greet()); //"hello world!"
