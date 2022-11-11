/* https://www.codewars.com/kata/54edbc7200b811e956000556
Counting Sheep

Instructions:
Consider an array/list of sheep where some sheep may be missing from their place. We 
need a function that counts the number of sheep present in the array (true means 
present).

Hint: Don't forget to check for bad values like null/undefined
*/

// My solution
// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter((sheep) => sheep).length;
// }

// Improved solution
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

// Trials
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
); //17
console.log(countSheeps([false, false, true, false])); //1
console.log(countSheeps([undefined, true, true, true, false, true])); //4
