/* https://www.codewars.com/kata/5601409514fc93442500010b
How good are you really?

Instructions:
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
Note:

Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

// My solution
function betterThanAverage(classPoints, yourPoints) {
  const classPointsAverage =
    classPoints.reduce((total, points) => {
      return total + points;
    }, 0) / classPoints.length;

  return yourPoints > classPointsAverage;
}

// Trials
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); //False
console.log(betterThanAverage([2, 3], 5)); //True
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); //True
