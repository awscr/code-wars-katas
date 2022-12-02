/* https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
Calculate average 

Instructions:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// My solution
function find_average(arr) {
  let arrLength = arr.length;

  if (arrLength === 0) return 0;

  return (
    arr.reduce((accumulator, num) => {
      return accumulator + num;
    }, 0) / arrLength
  );
}

// Trials
console.log(find_average([1, 1, 1])); //1
console.log(find_average([1, 2, 3, 4])); //2.5
console.log(find_average([1, 2, 3])); //2
