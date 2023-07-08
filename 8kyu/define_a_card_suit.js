/* https://www.codewars.com/kata/5a360620f28b82a711000047
Define a card suit

Instructions:
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

// My solution
function defineSuit(card) {
  return card.includes("♠")
    ? "spades"
    : card.includes("♦")
    ? "diamonds"
    : card.includes("♥")
    ? "hearts"
    : "clubs";
}

// Trials
console.log(defineSuit("Q♠")); //"spades"
console.log(defineSuit("9♦")); //"diamonds"
console.log(defineSuit("J♥")); //"hearts"
console.log(defineSuit("3♣")); //"clubs"
