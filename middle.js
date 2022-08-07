const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

const middle = (notMiddle) => {
  let total = notMiddle.length
  let middle = total / 2
  if (total <= 2) {
    return []
  }
  if (!Number.isInteger(middle)) {
    return [Math.floor(middle) + 1]
  }
  else {
    return [Math.floor(middle), Math.floor(middle) + 1]
  }
}
module.exports = middle;

