// Used to compare primitive data
// Similar to assertArraysEqual.js (but compares objects instead)

// Checking if input1 === input2
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

module.exports = assertEqual;
