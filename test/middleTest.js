// const assertArraysEqual = require('../assertArraysEqual')

// assertArraysEqual(middle([1]), []) // => []
// assertArraysEqual(middle([1, 2]), []) // => []
// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]
const assert = require('chai').assert;
const middle = require('../middle')

describe("Returns the middle element(s) in the array", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });
});