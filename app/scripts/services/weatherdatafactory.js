'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.currentWeatherDataFactory
 * @description
 * # currentWeatherDataFactory
 * Factory in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .factory('weatherDataFactory', function () {
    // Service logic
    // ...

    var currentWeatherData = {
        id: 0,
        country: '',
        name: '',
        weather: {
            id: '',
            main: '',
            description: '',
            icon: '',
        },
        main: {
            temp: 0,
            pressure: 0,
            humidity: 0,
            temp_min: 0,
            temp_max: 0
        },
        clouds: {
            all: 0
        },
        wind: {
            speed: 0,
            deg: 0
        },
        rain: {},
        dateTime: new Date(),
    };

    var mapApiDataToViewModel = function (apiData, viewModel) {
        viewModel.id = apiData.id;
        viewModel.country = apiData.sys.country;
        viewModel.name = apiData.name;
        viewModel.weather.id = apiData.weather[0].id;
        viewModel.weather.main = apiData.weather[0].main;
        viewModel.weather.description = apiData.weather[0].description;
        viewModel.weather.icon = apiData.weather[0].icon;
        viewModel.main.temp = apiData.main.temp;
        viewModel.main.pressure = apiData.main.pressure;
        viewModel.main.humidity = apiData.main.humidity;
        viewModel.main.temp_min = apiData.main.temp_min;
        viewModel.main.temp_max = apiData.main.temp_max;
        viewModel.clouds.all = apiData.clouds.all;
        viewModel.wind.speed = apiData.wind.speed;
        viewModel.wind.deg = apiData.wind.deg;
        viewModel.rain = apiData.rain;
        viewModel.dateTime = new Date(apiData.dt * 1000);
    }

    // Public API here
    return {
      create: function () {
        return currentWeatherData;
      },
      mapApiDataToViewModel: function (apiData, viewModel) {
          return mapApiDataToViewModel(apiData, viewModel);
      }
    };
  });
