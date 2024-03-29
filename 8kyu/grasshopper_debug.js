/* https://www.codewars.com/kata/55cb854deb36f11f130000e1
Grasshopper - Debug

Instructions:
Debug celsius converter

Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

Find the errors in the code to get the celsius converter working properly.

To convert fahrenheit to celsius:

celsius = (fahrenheit - 32) * (5/9)

Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report 
temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of 
temperature measuring sensors.
*/

// My solution
function weatherInfo(fahrenheit) {
  let celsius = convertToCelsius(fahrenheit);

  return celsius <= 0
    ? `${celsius} is freezing temperature`
    : `${celsius} is above freezing temperature`;
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

// Trials
console.log(weatherInfo(50)); //"10 is above freezing temperature"
console.log(weatherInfo(23)); //"-5 is freezing temperature"
console.log(weatherInfo()); //
