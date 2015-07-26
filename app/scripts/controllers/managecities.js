'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:ManagecitiesCtrl
 * @description
 * # ManagecitiesCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp')
  .controller('ManagecitiesCtrl', function ($scope, cityList, weatherApi) {
    $scope.cityList = cityList.getCities();
    $scope.newCity = null;
    $scope.addCity = function(){
        if ($scope.newCity !== null && $scope.newCity.id !== undefined) {
            cityList.addCity($scope.newCity);
            $scope.newCity = null;
        }
    };

    $scope.removeCity = function(city){
        cityList.removeCity(city);
    };

    $scope.findCity = function (city) {
        var foo = weatherApi.findCity(city, angular.noop);
        return foo.$promise.then(function (data) {
            if (data.cod === "200") {
            return data.list.filter(function (item) {
                var isCity = item.name !== '';
                return isCity;
            }).map(function(item){
               return {
                   id: item.id,
                   name: item.name,
                   displayName: item.name + ', ' + item.sys.country
               };
             });
         }
        });
    };
  });
