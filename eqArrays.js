const assertEqual = require('./assertEqual');

// Checks if the length === length between arrays
// Checks if the array === array
const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}
module.exports = eqArrays;
