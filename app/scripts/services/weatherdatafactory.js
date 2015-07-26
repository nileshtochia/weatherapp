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
        var newViewModel = angular.copy(viewModel);
        newViewModel.id = apiData.id;
        newViewModel.country = apiData.sys.country;
        newViewModel.name = apiData.name;
        newViewModel.weather.id = apiData.weather[0].id;
        newViewModel.weather.main = apiData.weather[0].main;
        newViewModel.weather.description = apiData.weather[0].description;
        newViewModel.weather.icon = apiData.weather[0].icon;
        newViewModel.main.temp = apiData.main.temp;
        newViewModel.main.pressure = apiData.main.pressure;
        newViewModel.main.humidity = apiData.main.humidity;
        newViewModel.main.temp_min = apiData.main.temp_min;
        newViewModel.main.temp_max = apiData.main.temp_max;
        newViewModel.clouds.all = apiData.clouds.all;
        newViewModel.wind.speed = apiData.wind.speed;
        newViewModel.wind.deg = apiData.wind.deg;
        newViewModel.rain = apiData.rain;
        newViewModel.dateTime = new Date(apiData.dt * 1000);

        return newViewModel;
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
