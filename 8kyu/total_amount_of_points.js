/* https://www.codewars.com/kata/5bb904724c47249b10000131

Total amount of points

Instructions:
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and 
y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

    if x > y: 3 points (win)
    if x < y: 0 points (loss)
    if x = y: 1 point (tie)

We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

    our team always plays 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4
*/

// My solution
// function points(games) {
//   let x, y;

//   return games.reduce((totalPoints, matchPoints) => {
//     (x = matchPoints[0]), (y = matchPoints[2]);

//     if (x > y) {
//       return (totalPoints += 3);
//     } else if (x === y) {
//       return (totalPoints += 1);
//     }

//     return (totalPoints += 0);
//   }, 0);
// }

// Another solution
const points = (games) =>
  games.reduce((totalPoints, matchPoints) => {
    return (totalPoints +=
      matchPoints[0] > matchPoints[2]
        ? 3
        : matchPoints[0] === matchPoints[2]
        ? 1
        : 0);
  }, 0);

// Trials
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
); //30
console.log(
  points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])
); //12
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
); //0
