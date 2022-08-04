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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ])