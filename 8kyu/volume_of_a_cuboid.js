/* https://www.codewars.com/kata/58261acb22be6e2ed800003a

Volume of a Cuboid

Instructions:
Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this 
calculation.
*/

// My solution
function getVolumeOfCuboid(length, width, height) {
  return height * length * width;
}

// Trials
console.log(getVolumeOfCuboid(1, 2, 2)); //4
console.log(getVolumeOfCuboid(6, 2, 5)); //60
console.log(getVolumeOfCuboid()); //
