'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.weatherCodeToWeatherIconMap
 * @description
 * # weatherCodeToWeatherIconMap
 * Constant in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .constant('weatherCodeToWeatherIconMap', {
      "01d": 'wi-day-sunny',
      "02d": 'wi-day-cloudy',
      "03d": 'wi-cloudy',
      "04d": 'wi-day-cloudy',
      "09d": 'wi-day-showers',
      "10d": 'wi-day-rain',
      "11d": 'wi-day-thunderstorm',
      "13d": 'wi-day-snow',
      "50d": 'wi-day-fog',
      "01n": 'wi-night-clear',
      "02n": 'wi-night-cloudy',
      "03n": 'wi-cloudy',
      "04n": 'wi-night-cloudy',
      "09n": 'wi-night-alt-showers',
      "10n": 'wi-night-alt-rain',
      "11n": 'wi-night-alt-thunderstorm',
      "13n": 'wi-night-alt-snow',
      "50n": 'wi-night-fog',
  });
