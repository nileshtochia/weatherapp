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

   var HistoricalWeatherResource = $resource(
      'http://api.openweathermap.org/data/2.5/history/city',
      {},
      {
          get: {
              method: 'GET'
          }
      }
    );

    var ForcastWeatherResource = $resource(
     'http://api.openweathermap.org/data/2.5/forecast',
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
       var cityWeatherData = CurrentWeatherResource.get({id: cityId, units: 'metric'}, function (){
         callback(cityWeatherData);
       });

       return cityWeatherData;
   };

   this.getHistoricalWeather = function (cityId, callback){
       var cityWeatherData = HistoricalWeatherResource.get({id: cityId, units: 'metric', type: 'hour'}, function (){
         callback(cityWeatherData);
       });

       return cityWeatherData;
   };

   this.getForcastWeather = function (cityId, callback){
       var cityWeatherData = ForcastWeatherResource.get({id: cityId, units: 'metric'}, function (){
         callback(cityWeatherData);
       });

       return cityWeatherData;
   };

   this.findCity = function (city, callback){
       var citySearchData = FindCityResource.get({q: city}, function (){
         callback(citySearchData);
       });

       return citySearchData;
   };
  });
