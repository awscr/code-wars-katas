/* https://www.codewars.com/kata/57faf7275c991027af000679
Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

Instructions:
 Remove n exclamation marks in the sentence from left to right. n is positive integer.
Examples

remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
*/

// My solution
function remove(s, n) {
  for (n; n > 0; n--) {
    s = s.replace("!", "");
  }

  return s;
}

// Trials
console.log(remove("Hi!", 1)); //"Hi"
console.log(remove("!!!Hi !!hi!!! !hi", 1)); //"!!Hi !!hi!!! !hi"
console.log(remove("Hi!!!", 100)); //"Hi"
console.log(remove("!Hi!", 0)); //"!Hi!"
