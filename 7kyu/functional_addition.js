/* https://www.codewars.com/kata/538835ae443aae6e03000547
Functional Addition

Instructions:
Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6
*/

// My solution
function add(n) {
  return function (m) {
    return n + m;
  };
}

console.log(add(3)(5)); //8
console.log(add(43)(2)); //45
console.log(add(10)(6)); //16
