/* https://www.codewars.com/kata/56a29b237e9e997ff2000048
Grasshopper - Create the rooms

Instructions:
You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There 
should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).
*/

// My solution
class Room {
  constructor() {
    this.name = "";
    this.description = "";
    this.completed = "";
  }
}

let rooms = {
  bedroom: new Room(),
  bathroom: new Room(),
  kitchen: new Room(),
};

// Trials
