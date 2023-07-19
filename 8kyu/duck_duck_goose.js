/* https://www.codewars.com/kata/582e0e592029ea10530009ce
Duck Duck Goose

Instructions:
The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a 
  property of Player objects, e.g Player.name)
*/

// My solution
function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length];
}

// Trials
console.log(duckDuckGoose(["John", "Mike", "Hailey", "Jennifer"], 1)); //"John"
console.log(duckDuckGoose(["John", "Mike", "Hailey", "Jennifer"], 6)); //"Mike"
console.log(duckDuckGoose(["John", "Mike", "Hailey", "Jennifer"], 3)); //"Hailey"
console.log(duckDuckGoose(["John", "Mike", "Hailey", "Jennifer"], 12)); //"Jennifer"
