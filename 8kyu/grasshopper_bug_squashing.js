/* https://www.codewars.com/kata/56214b6864fe8813f1000019
Grasshopper - Bug Squashing

Instructions:
Terminal game bug squashing

You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: 
roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library that already has the functions below. Create a function named main that calls the functions in the proper order.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
*/

// My solution
let health = 100;
let position = 0;
let coins = 0;

function main() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}