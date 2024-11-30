const convertToCelsius = function(fahrenheit) {
  let fToCEquation = (fahrenheit-32)*(5/9);
  let oneDecimalPoint = 10;
  let roundToOneDecimalPoint = Math.round(fToCEquation * oneDecimalPoint) / oneDecimalPoint;
  return roundToOneDecimalPoint;
};

const convertToFahrenheit = function(celsius) {
  let cToFEquation =  celsius*(9/5)+32;
  let oneDecimalPoint = 10;
  let roundToOneDecimalPoint = Math.round(cToFEquation * oneDecimalPoint) / oneDecimalPoint;
  return roundToOneDecimalPoint;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
