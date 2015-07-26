'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp')
  .controller('WeatherCtrl', function ($scope, cityList, weatherData) {
      weatherData.refreshData(function (){
          $scope.$broadcast('dataLoaded');
      });
      $scope.cityList = cityList.getCities();
      $scope.weatherData = weatherData.weatherDataByCity;
  });
