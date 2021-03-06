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
        var findCity = weatherApi.findCity(city, angular.noop);
        return findCity.$promise.then(function (data) {
            if (data.cod === "200") {
            return data.list.filter(function (item) {
                var isCity = item.name !== '';
                var hasBeenAdded = cityList.getCities().filter(function (addedCity){
                    return addedCity.id === item.id;
                }).length === 1;
                return isCity && !hasBeenAdded;
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
