const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    return "true";
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`)
  return "false";
};

const tail = function (array) {
  return array.slice(1, array.length);
}
let arrayTest = [1, 2, 3, 4, 5]
console.log(arrayTest);
console.log(tail(arrayTest));
console.log(arrayTest);

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!