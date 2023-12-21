/* https://www.codewars.com/kata/57037ed25a7263ac35000c80
Generate user links

Your task is to create userlinks for the url, you will be given a username and must return a valid link.
Example

generate_link('matt c')
http://www.codewars.com/users/matt%20c
*/

// My solution
function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}

// Trials
console.log(generateLink("matt c")); //"http://www.codewars.com/users/matt%20c"
console.log(generateLink("GiacomoSorbi")); //"http://www.codewars.com/users/GiacomoSorbi"
console.log(generateLink("ZozoFouchtra")); //"http://www.codewars.com/users/ZozoFouchtra"
