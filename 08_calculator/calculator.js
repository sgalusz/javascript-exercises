const add = function(number1, number2) {return number1 + number2;}
 
const subtract = function(number1, number2) {return number1 - number2;}

const sum = function(toAdd) {
  let result = 0;
  for (let counter = 0; counter < toAdd.length; counter++){
    result += toAdd[counter];
  }

  return result;
};

const multiply = function(toMultiply) {
  let result = 1;

  for (let multiple of toMultiply) {
    result *= multiple;
  }

  return result;
}

const power = function(number1, number2) {return number1 ** number2;}

const factorial = function(toFactor) {
  let result = 1; 
	
  while (toFactor > 0)
  {
    result *= toFactor;
    toFactor--;
  }
  
  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
