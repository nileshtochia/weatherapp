'use strict';

/**
 * @ngdoc directive
 * @name weatherAppApp.directive:weatherIcon
 * @description
 * # weatherIcon
 */
angular.module('weatherAppApp')
  .directive('weatherIcon', function (weatherCodeToWeatherIconMap) {
    return {
      scope: {
          iconCode: '='
      },
      template: '<i class="wi {{iconClass}}"></i>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
