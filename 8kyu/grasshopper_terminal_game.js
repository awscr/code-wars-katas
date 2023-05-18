/* https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/javascript
Grasshopper - Terminal game move function

Instructions:
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
*/

// My solution
function move(position, roll) {
  return position + roll * 2;
}

// Trials
console.log(move(0, 4)); //8
console.log(move(3, 6)); //15
console.log(move(2, 5)); //12
