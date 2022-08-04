// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {

  const inspect = require('util').inspect;

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)}  !== ${inspect(expected)}`)
  }
}

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

const eqObjects = function (object1, object2) {
  //if it is an array then we're inputting our objects into the eqArrays equation
  if (object1.isArray && object2.isArray) {
    return eqArrays(object1, object2)
  }

  const keyOne = Object.keys(object1).sort();
  const keyTwo = Object.keys(object2).sort();
  const valueOne = Object.values(object1).sort();
  const valueTwo = Object.values(object2).sort();
  // Compares the length of the object KEYS
  if (keyOne.length === keyTwo.length
    //Changes the KEY and VALUE to a string first and then compares them
    && JSON.stringify(keyOne) === JSON.stringify(keyTwo)
    && JSON.stringify(valueOne) === JSON.stringify(valueTwo)) {
    return true
  }
  return false
};



// console.log(`Example label: ${inspect(actual)}`);


object1 = { a: "1", b: "2" }
object2 = { a: "1", b: "2" }
assertObjectsEqual(eqObjects(object1, object2), true)

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false
////////////
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false