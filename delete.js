const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return 🟢🟢🟢  Assertion Passed: ${actual} === ${expected};

  } else {
    return 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected};
  }

};

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;

};

const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();
  //console.log("\nstart")
  //console.log(keys1, keys2)

  if (!eqArrays(keys1, keys2)) {
    return false;
  }

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    //console.log(value1, value2)

    if (Array.isArray(value1)) {   //is it an arry 
      if (!eqArrays(value1, value2)) { // are the values the same 
        //console.log("eq arry failed!!!!")
        return false;
      }
      continue;
    }
    if (value1 !== value2) {
    //console.log("value check fail")
      return false;
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false



console.log(assertEqual(eqObjects(cd, dc), true));
console.log(assertEqual(eqObjects(cd, cd2), false));