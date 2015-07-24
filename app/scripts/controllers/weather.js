'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp')
  .controller('WeatherCtrl', function ($scope, weatherApi) {
    weatherApi.getCurrentWeather('london', function(weatherData){
        $scope.weatherData = weatherData;
    });
  });
