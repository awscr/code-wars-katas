/* https://www.codewars.com/kata/55c28f7304e3eaebef0000da
Unfinished Loop - Bug Fixing #1

Instructions:
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number;){
    newArray.push(counter);
  }
  
  return newArray;
}
*/

// My solution
function createArray(num) {
  let arr = [];

  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  return arr;
}

// Trials
console.log(createArray(1)); //[1]
console.log(createArray(2)); //[1, 2]
console.log(createArray(5)); //[1, 2, 3, 4, 5]
