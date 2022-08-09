// const assertEqual = require ('../assertEqual')


// assertEqual(tail([5, 6, 7]), 7);

const assert = require('chai').assert;
const tail = require('../tail')

describe("Removes the first element in the array and return the rest", () => {

  it("returns 7 for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });

  it("returns 2 for [1, 5, 3, 4, 2]", () => {
    assert.deepEqual(tail([1, 5, 3, 4, 2]), [5, 3, 4, 2]); 
  });

  it("returns 'World' for ['Hello', 'World']", () => {
    assert.deepEqual(tail(['Hello', 'World']), ['World']); 
  });

});