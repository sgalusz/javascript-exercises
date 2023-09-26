const convertToCelsius = function(temp){
  let result = ((temp - 32) * (5/9));
  
  if (result == 0) return 0;
  else return Number(result.toFixed(1));
}

const convertToFahrenheit = function(temp) {
  let result = (temp * (9/5) + 32);
  
  if (result == 0) return 0;
  else return Number(result.toFixed(1));
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
