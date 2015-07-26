'use strict';

/**
 * @ngdoc overview
 * @name weatherAppApp
 * @description
 * # weatherAppApp
 *
 * Main module of the application.
 */
angular
  .module('weatherAppApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/weather.html',
        controller: 'WeatherCtrl',
        controllerAs: 'weather'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/manage', {
        templateUrl: 'views/managecities.html',
        controller: 'ManagecitiesCtrl',
        controllerAs: 'managecities'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
