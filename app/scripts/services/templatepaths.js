'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.TEMPLATEPATHS
 * @description
 * # TEMPLATEPATHS
 * Constant in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .constant('TEMPLATEPATHS', {
      templatesFolder: '/views/templates/',
      currentWeatherTemplate: 'current-weather.html'
  });
