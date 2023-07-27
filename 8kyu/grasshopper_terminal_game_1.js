/* https://www.codewars.com/kata/55e8aba23d399a59500000ce
Grasshopper - Terminal Game #1

Instructions:
In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
attribute 	value
name 	user argument or 'Hero'
position 	'00'
health 	100
damage 	5
experience 	0
*/

// My solution
function Hero(name) {
  this.name = name || "Hero";
  this.position = "00";
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

// Trials
let player1 = new Hero("Oscar");

console.log(player1.name); //"Oscar"
console.log(player1.position); //"00"
console.log(player1.health); //100
console.log(player1.damage); //5
console.log(player1.experience); //0
