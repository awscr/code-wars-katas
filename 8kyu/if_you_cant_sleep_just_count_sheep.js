/* https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
If you can't sleep, just count sheep!!

Instructions:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative 
integers.

*/

// My solution
const countSheep = function (num) {
  let sheepStr = "";

  for (let i = 1; i <= num; i++) {
    sheepStr += `${i} sheep...`;
  }

  return sheepStr;
};

// Trials
console.log(countSheep(3)); //"1 sheep...2 sheep...3 sheep"
console.log(countSheep(0)); //
console.log(countSheep()); //"1 sheep..."
