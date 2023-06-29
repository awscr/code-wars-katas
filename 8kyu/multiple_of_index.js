/* https://www.codewars.com/kata/5a34b80155519e1a00000009
Multiple of index

Instructions:
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
*/

// My solution
let multipleOfIndex = (a) => a.filter((n, i) => n % i === 0);

// Trials
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])); //[-6, 32, 25]
console.log(multipleOfIndex([11, -11])); //[-11]
console.log(multipleOfIndex([0, 2, 3, 6, 9])); //[0, 2, 6]
