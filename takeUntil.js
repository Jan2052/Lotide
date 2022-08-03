const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`)
  }
};

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

const takeUntil = function(array, callback) {
  newArr = []
  for (num of array) {
    if (callback(num)){
      break;
    } else {
      newArr.push(num)
    }
  }
  return newArr
}

takeUntil.js
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ])