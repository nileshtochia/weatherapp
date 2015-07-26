'use strict';

describe('Service: currentWeatherDataFactory', function () {

  // load the service's module
  beforeEach(module('weatherAppApp'));

  // instantiate service
  var currentWeatherDataFactory;
  beforeEach(inject(function (_currentWeatherDataFactory_) {
    currentWeatherDataFactory = _currentWeatherDataFactory_;
  }));

  it('should do something', function () {
    expect(!!currentWeatherDataFactory).toBe(true);
  });

});
