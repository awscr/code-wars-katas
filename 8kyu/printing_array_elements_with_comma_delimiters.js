/* https://www.codewars.com/kata/56e2f59fb2ed128081001328
Printing Array elements with Comma delimiters

Instructions:
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level
*/

// My solution
function printArray(arr) {
  return arr.join();
}

// Trials
console.log(printArray(["h", "o", "l", "a"])); //"h,o,l,a"
console.log(printArray(["1", "2"])); //"1,2"
console.log(printArray(["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"])); //"j,a,v,a,s,c,r,i,p,t"
