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


// const without = (source, itemsToRemove) => {
//   let favorites = []
//   for (let j = 0; j < source.length; j++) {
//     for (let k = 0; k < itemsToRemove.length; k++) {
//       if (source[j] != itemsToRemove[k]) {
//         favorites.push(source[j])
//       } //else {
//         //favorites = 1 //1 means it's in the array so we add it in // 0 means not in array
//      // }
//     }
//   } 
//   console.log(favorites) 
// }

const without = (source, itemsToRemove) => {
  let check = 0
  let favorites = []
  for (let j = 0; j < source.length; j++) {
    for (let k = 0; k < itemsToRemove.length; k++) {
      if (source[j] === itemsToRemove[k]) {
        check = 1
      }
    }
    if (check == 0) {
      favorites.push(source[j])
    }
    check = 0 //resets check back into 0
  }
  console.log(favorites)
  return favorites
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);