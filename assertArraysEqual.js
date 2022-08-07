const eqArrays = require('./eqArrays')

// Used to compare objects(non-primitive data)
// Similar to assertEqual.js (but compares primitive data)
const assertArraysEqual = function (actual, expected) {
    if (eqArrays(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`)
    }
};

module.exports = assertArraysEqual;

