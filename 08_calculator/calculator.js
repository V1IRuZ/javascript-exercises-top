const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(array) {
  return array.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
  return array.reduce((total, num) => total * num, 1);
};

const power = function(numOne, numTwo) {
  return numOne ** numTwo;
};

const factorial = function(num) {
  let currentNum = 1;
  for (let i = num; i > 0; i--) {
      currentNum *= i;
  }
	return currentNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
