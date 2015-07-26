'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.weatherData
 * @description
 * # weatherData
 * Service in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .service('weatherData', function (cityList, weatherApi, $q, weatherDataFactory, weatherForecastDataFactory, weatherHistoricalDataFactory) {
      var convertKelvinToCelsius = function(weatherData) {
          weatherData.main.temp =  weatherData.main.temp - 273;
          weatherData.main.temp_min =  weatherData.main.temp_min - 273;
          weatherData.main.temp_max =  weatherData.main.temp_max - 273;
      };
    var _this = this;
    _this.weatherDataByCity = {};
    _this.refreshData = function (allDoneCallback){
        angular.forEach(cityList.getCities(), function(city) {
            _this.weatherDataByCity[city.id] = {};
            _this.weatherDataByCity[city.id].current = weatherDataFactory.create();
            _this.weatherDataByCity[city.id].historical = weatherHistoricalDataFactory.create();
            _this.weatherDataByCity[city.id].forecast = weatherForecastDataFactory.create();

            var currentWeatherPromise = weatherApi.getCurrentWeather(city.id, function(weatherData) {
                _this.weatherDataByCity[city.id].current = weatherDataFactory.mapApiDataToViewModel(weatherData, _this.weatherDataByCity[city.id].current);
            });

            var historicalWeatherPromise = weatherApi.getHistoricalWeather(city.id, function(weatherData) {
                _this.weatherDataByCity[city.id].historical = weatherHistoricalDataFactory.mapApiDataToViewModel(weatherData, _this.weatherDataByCity[city.id].historical);
                angular.forEach(_this.weatherDataByCity[city.id].historical.list, function (item) {
                    convertKelvinToCelsius(item);
                });
            });

            var forcastWeatherPromise = weatherApi.getForcastWeather(city.id, function(weatherData) {
                _this.weatherDataByCity[city.id].forecast = weatherForecastDataFactory.mapApiDataToViewModel(weatherData, _this.weatherDataByCity[city.id].forecast);
            });

            $q.all([currentWeatherPromise, historicalWeatherPromise, forcastWeatherPromise]).then(function(){
                allDoneCallback();
            });
        });
    };
  });
