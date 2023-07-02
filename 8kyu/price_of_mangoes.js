/* https://www.codewars.com/kata/57a77726bb9944d000000b06
Price of Mangoes

Instructions:
There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
*/

// My solution
function mango(quantity, price) {
  return (quantity - Math.floor(quantity / 3)) * price;
}

// Trials
console.log(mango(3, 3)); //6
console.log(mango(9, 5)); //30
console.log(mango(5, 3)); //12
