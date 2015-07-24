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
    $scope.newCity = '';
    $scope.addCity = function(){
        // weatherApi.findCity($scope.newCity, function (data) {
        //     console.log(data);
        // });
        $scope.findCity($scope.newCity);
        cityList.addCity($scope.newCity);
        $scope.newCity = '';
    };

    $scope.findCity = function (city) {
        var foo = weatherApi.findCity(city, angular.noop);
        return foo.$promise.then(function (data) {
            return data.list.map(function(item){
               return {
                   id: item.id,
                   name: item.name,
                   displayName: item.name + ', ' + item.sys.country
               };
             });
        });
    };
  });
