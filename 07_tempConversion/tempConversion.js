const convertToCelsius = function(temp) {
let celsiusTemp =(temp - 32) / 1.8;  
return Math.round(celsiusTemp*10)/10;
};

const convertToFahrenheit = function(temp) {
let fahrenheitTemp = temp * 1.8 + 32;
return Math.round(fahrenheitTemp*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
