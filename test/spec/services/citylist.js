'use strict';

describe('Service: cityList', function () {

  // load the service's module
  beforeEach(module('weatherAppApp'));

  // instantiate service
  var cityList;
  var mockCity = {
    id: 123,
    name: 'foo'
  };
  
  beforeEach(inject(function (_cityList_) {
    cityList = _cityList_;
  }));
  
  it('should get cities', function () {
    expect(cityList.getCities().length).toBe(1);
  });

  it('should add a city', function () {
    cityList.addCity(mockCity);
    expect(cityList.getCities().length).toBe(2);
  });
  
  it('should remove a city', function () {
    cityList.addCity(mockCity);
    
    cityList.removeCity(mockCity);
    
    expect(cityList.getCities().length).toBe(1);
  });
});