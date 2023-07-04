/* https://www.codewars.com/kata/5748838ce2fab90b86001b1a
Area of a Square

Instructions:
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded 
to two decimals.
*/

// My solution
function squareArea(A) {
  let circum = 4 * A;
  let radius = circum / (2 * Math.PI);
  let area = Math.pow(radius, 2);

  return Math.round(area * 100) / 100;
}

// Trials
console.log(squareArea(2)); //1.62
console.log(squareArea(10)); //40.53
console.log(squareArea(8.2)); //27.25
