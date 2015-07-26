'use strict';

describe('Service: weatherForecastDataFactory', function () {

  // load the service's module
  beforeEach(module('weatherAppApp'));

  // instantiate service
  var weatherForecastDataFactory;
  beforeEach(inject(function (_weatherListDataFactory_) {
    weatherForecastDataFactory = _weatherListDataFactory_;
  }));

  it('should do something', function () {
    expect(!!weatherForecastDataFactory).toBe(true);
  });

});
