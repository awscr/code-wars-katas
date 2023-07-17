/* https://www.codewars.com/kata/570e8ec4127ad143660001fd
Name on billboard

Instructions:
You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if 
you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 letters * 30 = 600 (Space counts as a character).
*/

// My solution
function billboard(name, price = 30) {
  let totalCost = 0;

  for (i = 0; i < name.length; i++) {
    totalCost += price;
  }

  return totalCost;
}

// Trials
console.log(billboard("Jeong-Ho Aristotelis")); //600
console.log(billboard("Abishai Charalampos")); //570
console.log(billboard("Paolo Oli")); //270