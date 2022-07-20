const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`)
  }
};

// const eqArrays = function (arrayOne, arrayTwo) {
//   if (arrayOne === arrayTwo) {
//     console.log("true")
//     return arrayOne, arrayTwo;
//   } if (arrayOne !== arrayTwo) {
//     console.log("false")
//     return arrayOne, arrayTwo;
//   }
// }

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

console.log(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
console.log(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false