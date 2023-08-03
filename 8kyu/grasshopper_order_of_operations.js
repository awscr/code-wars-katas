/* https://www.codewars.com/kata/560ecf0cb040de130e00007d
Grasshopper - Order of operations

Instructions:
You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to 
make it return 32 without changing the number or the operators.
*/

// My solution
function orderOperations() {
  return (2 + 2) * (2 + 2) * 2;
}

// Trials
console.log(orderOperations()); //32
