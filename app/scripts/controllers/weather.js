'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp')
  .controller('WeatherCtrl', function ($scope, weatherData) {
      weatherData.refreshData();
      $scope.weatherData = weatherData.weatherDataByCity;
  });
