/* https://www.codewars.com/kata/53d16bd82578b1fb5b00128c
Grader

Instructions:
Create a function that takes a number as an argument and returns a grade based on that number.
Score 	Grade
Anything greater than 1 or less than 0.6 	"F"
0.9 or greater 	"A"
0.8 or greater 	"B"
0.7 or greater 	"C"
0.6 or greater 	"D"
*/

// My solution
function grader(score) {
  return score > 1 || score < 0.6
    ? "F"
    : score >= 0.9
    ? "A"
    : score >= 0.8
    ? "B"
    : score >= 0.7
    ? "C"
    : "D";
}

// Trials
console.log(grader(0)); //"F"
console.log(grader(0.6)); //"D"
console.log(grader(0.9)); //"A"
console.log(grader(0.8)); //"B"
console.log(grader(0.7)); //"C"
