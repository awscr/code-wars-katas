/* https://www.codewars.com/kata/5a00e05cc374cb34d100000d
Reversed sequence 

Instructions:
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

// My solution
const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }

  return arr;
};

// Trials
console.log(reverseSeq(5)); //[5, 4, 3, 2, 1]
console.log(reverseSeq(0)); //[]
console.log(reverseSeq(-1)); //[]
