'use strict';

/**
 * @ngdoc directive
 * @name weatherAppApp.directive:weatherList
 * @description
 * # weatherList
 */
angular.module('weatherAppApp')
  .directive('weatherList', function (TEMPLATEPATHS) {
    return {
      templateUrl: TEMPLATEPATHS.templatesFolder + TEMPLATEPATHS.weatherListTemplate,
      restrict: 'E',
      scope: {
          data: '='
      },
      link: function postLink(scope, element, attrs) {
          scope.popoverTemplateUrl = 'weather-popover.html';
      }
    };
  });
