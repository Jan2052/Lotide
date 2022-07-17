const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    return "true";
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`)
  return "false";
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);