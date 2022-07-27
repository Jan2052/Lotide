//assertArraysEqual.js
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
//assertEquals.js
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`)
  }
};


//Our new code to find the position of letters
const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
      if (results[sentence[i]] !== undefined) {
        results[sentence[i]].push(i)
    } else {
        results[sentence[i]] = [sentence.indexOf(sentence[i])]
    }

  }
  console.log(results)
  return results;
};

letterPositions("hello")
assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").e, [1]);

//keys have to be the letters of the sentence.
//values have to be an array of index positions.

//1st loop to go through sentence and create a key for each letter (no repeats) with empty value.

//let sentenceArray = sentence.split("")  *turns string into an array
//




//2nd loop to push each letter into each key as a value.