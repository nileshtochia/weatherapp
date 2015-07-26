'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.weatherData
 * @description
 * # weatherData
 * Service in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .service('weatherData', function (cityList, weatherApi, $q, weatherDataFactory) {
    var _this = this;
    _this.weatherDataByCity = {};
    _this.refreshData = function (allDoneCallback){
        angular.forEach(cityList.getCities(), function(city) {
            _this.weatherDataByCity[city.id] = {};
            _this.weatherDataByCity[city.id].current = weatherDataFactory.create();
            var currentWeatherPromise = weatherApi.getCurrentWeather(city.id, function(weatherData) {
                weatherDataFactory.mapApiDataToViewModel(weatherData, _this.weatherDataByCity[city.id].current);
            });

            var historicalWeatherPromise = weatherApi.getHistoricalWeather(city.id, function(weatherData) {
                _this.weatherDataByCity[city.id].historical = weatherData;
            });

            var forcastWeatherPromise = weatherApi.getForcastWeather(city.id, function(weatherData) {
                _this.weatherDataByCity[city.id].forecast = weatherData;
            });

            $q.all([currentWeatherPromise, historicalWeatherPromise, forcastWeatherPromise]).then(function(){
                allDoneCallback();
            });
        });
    };
  });
