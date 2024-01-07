/* https://www.codewars.com/kata/51f2b4448cadf20ed0000386
Remove anchor from URL

Instructions:
Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

// My solution
// function removeUrlAnchor(url) {
//   const hashIdx = url.indexOf("#");

//   return hashIdx !== -1 ? url.slice(0, hashIdx) : url;
// }

// Improved solution
function removeUrlAnchor(url) {
  return url.split("#")[0];
}

// Trials
console.log(removeUrlAnchor("www.codewars.com#about")); //"www.codewars.com"
console.log(removeUrlAnchor("www.codewars.com?page=1")); //"www.codewars.com?page=1"
console.log(removeUrlAnchor("www.google.com#about")); //"www.google.com"
