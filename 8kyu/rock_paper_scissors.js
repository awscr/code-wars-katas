/* https://www.codewars.com/kata/5672a98bdbdd995fad00000f
Rock Paper Scissors!

Instructions:
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

// My solution
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }
  return `Player ${
    /rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2
  } won!`;
};

// Trials
console.log(rps("rock", "scissors")); //"Player 1 won!"
console.log(rps("paper", "scissors")); //"Player 2 won!"
console.log(rps("rock", "paper")); //"Player 2 won!"
console.log(rps("rock", "rock")); //"Draw!"
