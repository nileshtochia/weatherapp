'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.weatherData
 * @description
 * # weatherData
 * Service in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .service('weatherData', function (cityList, weatherApi) {
    var _this = this;
    _this.weatherDataByCity = {};
    _this.refreshData = function (){
        angular.forEach(cityList.getCities(), function(city) {
            _this.weatherDataByCity[city] = { current: {} };
            weatherApi.getCurrentWeather(city, function(weatherData) {
                _this.weatherDataByCity[city].current = weatherData;
            });
        });
    };
  });
