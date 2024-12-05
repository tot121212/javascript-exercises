const add = function(...args) {
	return args[0] + args[1];
};

const subtract = function(...args) {
	return args[0] - args[1];
};

const sum = function(...args) {
	return args[0]
  .reduce((total, number) => {
    return total + Number(number);
  }, 0);
};

const multiply = function(...args) {
  return args[0]
  .reduce((total, number) => {
    return total * Number(number);
  }, 1);
};

const power = function(...args) {
  const number = args[0];
  const count = args[1];

  const numbersArray = new Array(count).fill(number)

  return numbersArray
  .reduce((total, number) => {
    return total * number;
  }, 1);
  // for count of arg[0], multiply by itself and return, arg[1] amount of times
};

const factorial = function(n) {  //multiply number by all positive integers less than it, down to 1
  if (n < 0){
    throw new Error("Cannot get factorial of negative numbers");
  }
  if (n === 0){
    return 1; // base case
  }

  let result = 1;
  for (let i = 1; i <= n; i++){
    result *= i;
  }
  return result;
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
