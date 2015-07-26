'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.weatherListDataFactory
 * @description
 * # weatherListDataFactory
 * Factory in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .factory('weatherHistoricalDataFactory', function (weatherDataFactory) {
    // Service logic
    // ...

    var weatherData = {
        id: 0,
        list: []
    };

    var mapApiDataToViewModel = function (apiData, viewModel) {
        var newViewModel = angular.copy(viewModel);
        newViewModel.id = apiData.city_id;
        angular.forEach(apiData.list, function(weatherApiItem) {
            var weatherViewModel = weatherDataFactory.create();
            weatherViewModel = weatherDataFactory.mapApiDataToViewModel(weatherApiItem, weatherViewModel);
            newViewModel.list.push(weatherViewModel);
        })
        return newViewModel;
    };

    // Public API here
    return {
      create: function () {
        return weatherData;
      },
      mapApiDataToViewModel: function (apiData, viewModel) {
          return mapApiDataToViewModel(apiData, viewModel);
      }
    };
  });
