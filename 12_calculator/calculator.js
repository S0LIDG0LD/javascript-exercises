const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, item) => (total += item), 0);
};

// const multiply = function(...args) {
//   total = 0;
//   for (let arg in args) {
//     total *= arg;
//   }
//   return total;
// };

const multiply = function(arr) {
  return arr.reduce((total, item) => (total *= item), 1);
};

const power = function() {
	
};

const factorial = function() {
	
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
