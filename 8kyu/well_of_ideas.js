/* https://www.codewars.com/kata/57f222ce69e09c3630000212
Well of Ideas - Easy Version

Instructions:
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', 
if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

// My solution
function well(x) {
  let goodIdeas = x.filter((val) => val === "good").length;

  return goodIdeas < 1
    ? "Fail!"
    : goodIdeas < 3
    ? "Publish!"
    : "I smell a series!";
}

// Trials
console.log(well(["bad", "bad", "bad"])); //"Fail!"
console.log(well(["good", "bad", "bad", "bad", "bad"])); //"Publish!"
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
); //"I smell a series!"
