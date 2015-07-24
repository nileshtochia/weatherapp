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

   var FindCityResource = $resource(
      'http://api.openweathermap.org/data/2.5/find',
      {},
      {
          get: {
              method: 'GET'
          }
      }
  );

   this.getCurrentWeather = function (cityId, callback){
       var cityWeatherData = CurrentWeatherResource.get({id: cityId}, function (){
         callback(cityWeatherData);
       });
   };

   this.findCity = function (city, callback){
       var citySearchData = FindCityResource.get({q: city}, function (){
         callback(citySearchData);
       });

       return citySearchData;
   };
  });
