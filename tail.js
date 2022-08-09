const assertEqual = require('./assertEqual');

//Cuts off the first number and returns the rest
const tail = function (array) {
  return array.slice(1);
}

module.exports = tail;
