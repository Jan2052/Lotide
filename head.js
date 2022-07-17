const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    return "true";
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`)
  return "false";
};

const head = function (array) {
  console.log(array[0])
  return array
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
