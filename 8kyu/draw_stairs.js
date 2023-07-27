/* https://www.codewars.com/kata/5b4e779c578c6a898e0005c5
Draw stairs

Instructions:
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"

or printed:

I
 I
  I

Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
*/

// My solution
function drawStairs(n) {
  let stairs = "";

  for (let i = 1; i <= n; i++) {
    if (i > 1) stairs += " ".repeat(i - 1);

    if (i === n) {
      stairs += "I";
    } else {
      stairs += "I \n";
    }
  }
  return stairs;
}

// Trials
console.log(drawStairs(3));
//"I\n I\n  I"
/*
I
 I
  I
*/
console.log(drawStairs(7)); //
//"I\n I\n I\n I\n I\n I\n I"
/*
I
 I
  I
   I
    I
     I
      I
*/
console.log(drawStairs(1)); //"I"
