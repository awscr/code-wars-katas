/* https://www.codewars.com/kata/56a4addbfd4a55694100001f
Did she say hallo?

Instructions:
You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

    hello - english
    ciao - italian
    salut - french
    hallo - german
    hola - spanish
    ahoj - czech republic
    czesc - polish

Notes

    you can assume the input is a string.
    to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
    function should be case insensitive to pass the tests
*/

// My solution
const validateHello = (greetings) =>
  /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);

// Trials
console.log(validateHello("hallo")); //true
console.log(validateHello("hola")); //true
console.log(validateHello("AHOJ")); //true
console.log(validateHello("hi")); //false
console.log(validateHello("salud")); //false
