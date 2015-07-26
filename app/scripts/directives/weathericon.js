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
          iconCode: '=',
          iconDescription: '='
      },
      template: '<i class="wi {{iconClass}}" tooltip="{{iconDescription}}" tooltip-placement="bottom"></i>',
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {
          scope.$watch('iconCode', function (){
              scope.iconClass = weatherCodeToWeatherIconMap[scope.iconCode];
          });
      }
    };
  });
