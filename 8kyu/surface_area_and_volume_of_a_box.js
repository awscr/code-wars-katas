/* https://www.codewars.com/kata/565f5825379664a26b00007c
Surface Area and Volume of a Box

Instructions:
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

// My solution
function getSize(width, height, depth) {
  return [
    2 * width * depth + 2 * width * height + 2 * depth * height,
    width * height * depth,
  ];
}

// Trials
console.log(getSize(4, 2, 6)); //[88,48]
console.log(getSize(10, 10, 10)); //[600,1000]
console.log(getSize(22, 10, 27)); //[2168, 5940]
