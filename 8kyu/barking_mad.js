/* https://www.codewars.com/kata/54dba07f03e88a4cec000caf
Barking mad

Instructions:
Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo. 
*/

// My solution
function Dog(breed) {
  this.breed = breed;

  this.bark = function () {
    return "Woof";
  };
}

let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");

// Trials
