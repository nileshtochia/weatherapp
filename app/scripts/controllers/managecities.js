'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:ManagecitiesCtrl
 * @description
 * # ManagecitiesCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp')
  .controller('ManagecitiesCtrl', function ($scope, cityList) {
    $scope.cityList = cityList.getCities();
    $scope.newCity = '';
    $scope.addCity = function(){
        cityList.addCity($scope.newCity);
        $scope.newCity = '';
    };
  });
