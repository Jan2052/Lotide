const assertEqual = require('./assertEqual');

//Cuts off the first number and returns the rest
const tail = function (array) {
  return array[array.length - 1]
}

module.exports = tail;