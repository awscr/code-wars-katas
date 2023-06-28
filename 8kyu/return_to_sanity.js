/* https://www.codewars.com/kata/514a7ac1a33775cbb500001e
Return to Sanity

Instructions:
This function should return an object, but it's not doing what's intended. What's wrong?
function mystery() {
  var results =
    {sanity: 'Hello'};
  return
    results;
}
*/

// My solution
function mystery() {
  const results = { sanity: "Hello" };

  return results;
}

// Trials
console.log(mystery()); //{sanity: "Hello"}
