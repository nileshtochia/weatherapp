'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.cityList
 * @description
 * # cityList
 * Service in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .service('cityList', function () {
    var cityList = [{id: 2643743, name:'London'}];
    this.addCity = function (city){
        cityList.push(city);
    };

    this.removeCity = function (city){
        function remove(array, item) {
            var index = array.indexOf(item);
            if (index > -1) {
                array.splice(index, 1);
            }
        }

        remove(cityList, city);
    };

    this.getCities = function () {
        return cityList;
    };
  });
