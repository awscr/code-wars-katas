/* https://www.codewars.com/kata/57096af70dad013aa200007b
Logical calculator

Instructions:
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the 
array.
Examples

    booleans = [True, True, False], operator = "AND"

    True AND True -> True
    True AND False -> False
    return False

    booleans = [True, True, False], operator = "OR"

    True OR True -> True
    True OR False -> True
    return True

    booleans = [True, True, False], operator = "XOR"

    True XOR True -> False
    False XOR False -> False
    return False

Input

    an array of Boolean values (1 <= array_length <= 50)
    a string specifying a logical operator: "AND", "OR", "XOR"

Output

A Boolean value (True or False).
*/

// My solution
function logicalCalc(arr, op) {
  const ops = {
    AND: (a, b) => a && b,
    OR: (a, b) => a || b,
    XOR: (a, b) => a !== b,
  };

  return arr.reduce(ops[op]);
}

// Trials
console.log(logicalCalc([true, true, true, false], "AND")); //false
console.log(logicalCalc([true, true, true, false], "OR")); //true
console.log(logicalCalc([true, true, true, false], "XOR")); //true
console.log(logicalCalc([true, true, false, false], "AND")); //false
console.log(logicalCalc([true, true], "OR")); //true
console.log(logicalCalc([false], "XOR")); //false
console.log(logicalCalc([true], "XOR")); //false
