'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.weatherApi
 * @description
 * # weatherApi
 * Service in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .service('weatherApi', function ($resource) {
    var CurrentWeatherResource = $resource(
       'http://api.openweathermap.org/data/2.5/weather',
       {},
       {
           get: {
               method: 'GET'
           }
       }
   );

   this.getCurrentWeather = function (city, callback){
       var cityData = CurrentWeatherResource.get({q: city}, function (){
         callback(cityData);
       });
   };
  });
