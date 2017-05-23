// var Weather = require('./../js/weather.js').weatherModule;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
  });

  $('#current-temperature').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then( function(response) {
      $('.showWeather').html("<h3>" + "The temperature in " + city + " is " + ((response.main.temp) - 273.15).toFixed(2) + " C" +  "</h3>" + "<br>" + "<h3>" + "The temperature F in " + city + " is " + ((response.main.temp)*(9/5) - 459.67).toFixed(2) + " F" + "</h3>");
    }).fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
  });
});
