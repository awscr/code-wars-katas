/* https://www.codewars.com/kata/586c1cf4b98de0399300001d
Grasshopper - Terminal game combat function

Instructions:
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be 
less than 0.
*/

// My solution
function combat(health, damage) {
  return Math.max(health - damage, 0);
}

// Trials
console.log(combat(100, 5)); //95
console.log(combat(92, 8)); //84
console.log(combat(20, 30)); //0
