/* https://www.codewars.com/kata/539ee3b6757843632d00026b
Find the capitals

Instructions:
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered 
list containing the indices of all capital (uppercase) letters in the string.
Example (Input --> Output)

"CodEWaRs" --> [0,3,4,6]
*/

// My solution
const capitals = (word) => {
  return word.match(/[A-Z]/g).map((x) => {
    return word.indexOf(x);
  });
};
// Trials
console.log(capitals("CodEWaRs")); //[0,3,4,6]
console.log(capitals("jhASDIwjdkasZAssd")); //[2,3,4,5,12,2]
console.log(capitals("jAVascRIPT")); //[1,2,6,7,8,9]
