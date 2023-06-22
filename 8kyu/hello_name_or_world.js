/* https://www.codewars.com/kata/57e3f79c9cb119374600046b
Hello, Name or World!

Instructions:
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/

// My solution
const hello = (s) =>
  `Hello, ${s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : "World"}!`;

// Trials
console.log(hello("john")); //"Hello, John"
console.log(hello("aLIce")); //"Hello, Alice"
console.log(hello("")); //"Hello, World!"
