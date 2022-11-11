/* https://www.codewars.com/kata/582cb0224e56e068d800003c
Keep Hydrated!

Instructions:
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water 
per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan 
will drink, rounded to the smallest value.
*/

// My solution
function litres(time) {
  return Math.floor(time * 0.5);
}

// Trials
console.log(litres(3)); //1
console.log(litres(6.7)); //3
console.log(litres(11.8)); //5
