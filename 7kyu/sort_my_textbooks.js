/* https://www.codewars.com/kata/5a07e5b7ffe75fd049000051
Sort My Textbooks

Instructions:
HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in 
  java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive
*/

// My solution
function sorter(arr) {
  return arr.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));
}

// Trials
console.log(
  sorter(
    ["Algebra", "History", "Geometry", "English"],
    ["Algebra", "English", "Geometry", "History"]
  )
); //[ 'Algebra', 'English', 'Geometry', 'History' ]
console.log(sorter(["Algebra", "history", "Geometry", "english"]), [
  "Algebra",
  "english",
  "Geometry",
  "history",
]); //[ 'Algebra', 'english', 'Geometry', 'history' ] [ 'Algebra', 'english', 'Geometry', 'history' ]
console.log(sorter(["Alg#bra", "$istory", "Geom^try", "**english"]), [
  "$istory",
  "**english",
  "Alg#bra",
  "Geom^try",
]); //[ '$istory', '**english', 'Alg#bra', 'Geom^try' ] [ '$istory', '**english', 'Alg#bra', 'Geom^try' ]
