/* https://www.codewars.com/kata/578a8a01e9fd1549e50001f1
Is your period late?

Instructions:
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
*/

// My solution
function periodIsLate(last, today, cycleLength) {
  return (today - last) / 86400000 > cycleLength;
}

// Trials
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)); //false
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)); //true
console.log(periodIsLate(new Date(2014, 1, 5), new Date(2014, 3, 29), 31)); //true
