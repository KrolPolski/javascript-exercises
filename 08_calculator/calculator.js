const { run } = require("jest-cli");

const add = function(a, b) {
	return a + b;
   
};
console.log(add(1,2));
const subtract = function(a,b) {
	return a -b;};

const sum = function(array) {
return array.reduce(add, 0);
};

const multiply = function(array) {
return array.reduce((a,i) => a * i);
}
const power = function(a,b) {
  return a ** b; 
	
};

const factorial = function(a) {
	if (a === 0) return 1;
  else if (a < 0) return Error;
  else {
    let runningTotal = a;
    for (let i = a - 1; i > 0; i--) {
           runningTotal = runningTotal * i;
    }
    return runningTotal;
  }
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
