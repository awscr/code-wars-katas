/* https://www.codewars.com/kata/56f6919a6b88de18ff000b36
101 Dalmatians - squash the bugs, not the dogs!

Instructions:
Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to 
respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.

Good luck!
*/

// My solution
function howManyDalmatians(num) {
  const dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];

  return num <= 10
    ? dogs[0]
    : num <= 50
    ? dogs[1]
    : num === 101
    ? dogs[3]
    : dogs[2];
}

// Trials
console.log(howManyDalmations(26)); //"More than a handful"
console.log(howManyDalmations(8)); //"Hardly any"
console.log(howManyDalmations(100)); //"Woah that's a lot of dogs!"
console.log(howManyDalmations(101)); //"101 DALMATIaNS!!!"
