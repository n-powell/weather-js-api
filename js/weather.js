var apiKey = require('./../.env').apiKey;

function Weather(){
}

Weather.prototype.getWeather = function(city) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}
// Weather.prototype.getCelsius = function(city){
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
//     $('.showWeather').text("The temperature in " + city + " is " + ((response.main.temp) - 273.15);
// }
//
// Weather.prototype.getFahrenheit = function (temperature) {
//   temperature = temperature*(9/5) - 459.67;
// };

exports.weatherModule = Weather;
