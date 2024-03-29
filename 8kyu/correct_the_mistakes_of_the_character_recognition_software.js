/* https://www.codewars.com/kata/577bd026df78c19bca0002c0
Correct the mistakes of the character recognition software

Instructions:
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.
*/

// My solution
function correct(str) {
  return str.replaceAll("5", "S").replaceAll("0", "O").replaceAll("1", "I");
}

// Trials
console.log(correct("L0ND0N")); //"LONDON"
console.log(correct("DUBL1N")); //"DUBLIN"
console.log(correct("51NGAP0RE")); //"SINGAPORE "
