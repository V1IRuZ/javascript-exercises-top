const convertToCelsius = function(fahrenheit) {
  let toCelsius = (fahrenheit - 32) * 5/9;
  return parseFloat(toCelsius.toFixed(1));
}

const convertToFahrenheit = function(celsius) {
  let toFahrenheit = (celsius * 9 / 5 + 32);
  return parseFloat(toFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
