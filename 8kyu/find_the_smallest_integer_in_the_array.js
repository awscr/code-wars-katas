/* https://www.codewars.com/kata/55a2d7ebe362935a210000b2
Find the smallest integer in the array

Instructions:
Given an array of integers your solution should find the smallest integer. 

You can assume, for the purpose of this kata, that the supplied array will not be 
empty.
*/

// My solution
function SmallestIntegerFinder(ints) {
  return Math.min(...ints);
}

// Trials
console.log(SmallestIntegerFinder([0, -1, 200, 1000, -2, -44])); //-44
console.log(SmallestIntegerFinder([66, 2, 5, 3, 0, 99])); //0
console.log(SmallestIntegerFinder([0, -6, -2, -55, -23, -5])); //-55
