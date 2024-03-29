const assertEqual = require('../assertEqual')

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

console.log(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
console.log(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false