'use strict';

describe('Service: weatherData', function () {

  // load the service's module
  beforeEach(module('weatherAppApp'));

  // instantiate service
  var weatherData, promiseThenFn, $q, cityList, weatherApi;

  beforeEach(function (){
    promiseThenFn = jasmine.createSpy('promise then fn');
      weatherApi = {
        getCurrentWeather: jasmine.createSpy('weatherApi.getCurrentWeather'),
        getHistoricalWeather: jasmine.createSpy('weatherApi.getHistoricalWeather'),
        getForcastWeather: jasmine.createSpy('weatherApi.getForcastWeather'),
      };

      cityList = {
        getCities: jasmine.createSpy('cityList.getCities').and.returnValue([ {id: 1},{ id: 2} ])
      };

      $q = {
          all: jasmine.createSpy('$q.all').and.returnValue({ then: promiseThenFn })
      };

      module(function ($provide) {
          $provide.value('$q', $q);
          $provide.value('cityList', cityList);
          $provide.value('weatherApi', weatherApi);
      });
  });

  beforeEach(inject(function (_weatherData_) {
    weatherData = _weatherData_;
  }));

  it('should call weather api on refresh data for all city ids', function () {
    weatherData.refreshData();

    expect(weatherApi.getCurrentWeather).toHaveBeenCalledWith(1, jasmine.any(Function));
    expect(weatherApi.getCurrentWeather).toHaveBeenCalledWith(2, jasmine.any(Function));
    expect(weatherApi.getHistoricalWeather).toHaveBeenCalledWith(1, jasmine.any(Function));
    expect(weatherApi.getHistoricalWeather).toHaveBeenCalledWith(2, jasmine.any(Function));
    expect(weatherApi.getForcastWeather).toHaveBeenCalledWith(1, jasmine.any(Function));
    expect(weatherApi.getForcastWeather).toHaveBeenCalledWith(2, jasmine.any(Function));
  });
  
  it('should call callback when all promises are resolved', function () {
    var callback = jasmine.createSpy();
    
    weatherData.refreshData(callback);
    
    expect(promiseThenFn).toHaveBeenCalled();
    promiseThenFn.calls.mostRecent().args[0]();
    expect(callback).toHaveBeenCalled();
  });  

});
