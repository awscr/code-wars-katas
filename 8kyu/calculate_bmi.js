/* https://www.codewars.com/kata/57a429e253ba3381850000fb

Calculate BMI

Instructions:
Write function bmi that calculates body mass index (bmi = weight / height^2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

// My solution
function bmi(weight, height) {
  const bmi = weight / height ** 2;

  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// Trials
console.log(bmi(80, 1.8)); //"Normal"
console.log(bmi(140, 1.5)); //"Obese"
console.log(bmi(145, 1.75)); //"Obese"
