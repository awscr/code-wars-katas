/* https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
Is it a palindrome?

Instructions:
Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of 
symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a 
canal – Panama".
*/

// My solution
function isPalindrome(x) {
  x = x.toLowerCase();

  return x === x.split("").reverse().join("");
}

// Trials
console.log(isPalindrome("Bob")); //true
console.log(isPalindrome("AbBa")); //true
console.log(isPalindrome("hello")); //
