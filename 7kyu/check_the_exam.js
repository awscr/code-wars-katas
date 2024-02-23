/* https://www.codewars.com/kata/5a3dd29055519e23ec000074
Check the exam

Instructions:
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect 
answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/

// My solution
function checkExam(arr1, arr2) {
  let count = 0;

  arr1.forEach((score, i) =>
    arr2[i] === "" ? (count += 0) : score === arr2[i] ? (count += 4) : count--
  );

  return count <= 0 ? 0 : count;
}

// Trials
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); //6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); //7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); //16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); //0
