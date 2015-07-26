'use strict';

/**
 * @ngdoc directive
 * @name weatherAppApp.directive:currentWeather
 * @description
 * # currentWeather
 */
angular.module('weatherAppApp')
  .directive('currentWeather', function (TEMPLATEPATHS) {
    return {
      templateUrl: TEMPLATEPATHS.templatesFolder + TEMPLATEPATHS.currentWeatherTemplate,
      restrict: 'E',
      scope: {
          data: '='
      },
      link: function postLink() {
      }
    };
  });
