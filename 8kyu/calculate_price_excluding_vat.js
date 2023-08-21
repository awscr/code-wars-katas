/* https://www.codewars.com/kata/5890d8bc9f0f422cf200006b
Calculate Price Excluding VAT

Instructions:
Write a function that calculates the original product price, without VAT.
Example

If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

    VAT is always 15% for the purposes of this Kata.
    Round the result to 2 decimal places.
    If null value given then return -1
*/

// My solution
excludingVatPrice = (p) => (p === null ? -1 : +(p / 1.15).toFixed(2));

// Trials
console.log(excludingVatPrice(230)); //200.00
console.log(excludingVatPrice(123)); //106.96
console.log(excludingVatPrice(67.16)); //58.40
