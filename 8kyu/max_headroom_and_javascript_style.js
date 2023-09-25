/* https://www.codewars.com/kata/52a47dd7e950edabfa000391
Max Headroom and JavaScript style

Instructions:
Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something 
about JavaScript style in this kata?
*/

// My solution
function getMax1() {
  const max = {
    name: "Max Headroom",
  };

  return max;
}

function getMax2() {
  return { name: "Max Headroom" };
}

// Trials
console.log(getMax1(), getMax2()); //{name: "Max Headroom"} {name: "Max Headroom"}
