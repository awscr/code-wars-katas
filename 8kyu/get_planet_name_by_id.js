/* https://www.codewars.com/kata/515e188a311df01cba000003
Get Planet Name By ID

Instructions:
The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"
*/

// My solution
function getPlanetName(id) {
  let name;

  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
      break;
  }

  return name;
}

// Trials
console.log(getPlanetName(2)); //"Venus"
console.log(getPlanetName(5)); //"Jupiter"
console.log(getPlanetName(3)); //"Earth"
