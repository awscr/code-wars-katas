/* https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
A Needle in the Haystack

Instructions:
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one 
"needle"

After your function finds the needle it should return a message (as a string) that 
says:

"found the needle at position " plus the index it found the needle, so: 
*/

// My solution
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

// Trials
console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
); //"found the needle at position 5"
console.log(
  findNeedle([
    "283497238987234",
    "a dog",
    "a cat",
    "some random junk",
    "a piece of hay",
    "needle",
    "something somebody lost a while ago",
  ])
); //"found the needle at position 5"
console.log(
  findNeedle([
    "aws",
    1,
    2,
    true,
    false,
    100,
    "amazon",
    "javascript",
    "needle",
    "typescript",
    undefined,
    null,
  ])
); //"found the needle at position 8"
