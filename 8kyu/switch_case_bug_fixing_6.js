/* https://www.codewars.com/kata/55c933c115a8c426ac000082
Switch/Case - Bug Fixing #6

Instructions:
 Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function? 
*/

// My solution
function evalObject(value) {
  switch (value.operation) {
    case "+":
      return value.a + value.b;
      break;
    case "-":
      return value.a - value.b;
      break;
    case "/":
      return value.a / value.b;
      break;
    case "*":
      return value.a * value.b;
      break;
    case "%":
      return value.a % value.b;
      break;
    case "^":
      return Math.pow(value.a, value.b);
  }
}

// Trials
console.log(evalObject({ a: 1, b: 1, operation: "+" })); //2
console.log(evalObject({ a: 1, b: 1, operation: "-" })); //0
console.log(evalObject({ a: 1, b: 1, operation: "/" })); //1
console.log(evalObject({ a: 1, b: 1, operation: "*" })); //1
console.log(evalObject({ a: 1, b: 1, operation: "%" })); //0
console.log(evalObject({ a: 1, b: 1, operation: "^" })); //1
