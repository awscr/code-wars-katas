/* https://www.codewars.com/kata/54fdaa4a50f167b5c000005f
Unexpected parsing

Instructions:
Here is a piece of code:

function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return 
  {
    status: msg
  }
}

Expected Behaviour

Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the 
argument is_busy.

But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.
*/

// My solution
function getStatus(isBusy) {
  let msg = isBusy ? "busy" : "available";

  return {
    status: msg,
  };
}

// Trials
console.log(getStatus(true)); //{status: "busy"}
console.log(getStatus(false)); //{status: "available"}
console.log(getStatus(4 + 4 === 8)); //{status: "busy"}
