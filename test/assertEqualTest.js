const assertEqual = require('../assertEqual');

const head = require('../head');
const tail = require('../tail')
const eqArrays = require('../eqArrays')


console.log('assertEqualTest')
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(2, 1);

console.log('headTest')
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

console.log('tailTest')
assertEqual(tail([5, 6, 7]), 7);

console.log('eqArraysTest')
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
console.log(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false