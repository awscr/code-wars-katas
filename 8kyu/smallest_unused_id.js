/* https://www.codewars.com/kata/55eea63119278d571d00006a
Smallest unused ID

Instructions:
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/

// My solution
function nextId(ids) {
  let smallestUnusedID = 0;

  while (ids.includes(smallestUnusedID)) smallestUnusedID++;

  return smallestUnusedID;
}

// Trials
console.log(nextId([0, 1, 2, 3, 5])); //4
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //11
console.log(nextId([1, 2, 0, 2, 3, 5])); //4
console.log(nextId([100, 2, 0, 4, 55, 23, 17])); //1
