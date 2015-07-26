'use strict';

describe('Service: weatherCodeToWeatherIconMap', function () {

  // load the service's module
  beforeEach(module('weatherAppApp'));

  // instantiate service
  var weatherCodeToWeatherIconMap;
  beforeEach(inject(function (_weatherCodeToWeatherIconMap_) {
    weatherCodeToWeatherIconMap = _weatherCodeToWeatherIconMap_;
  }));

  it('should do something', function () {
    expect(!!weatherCodeToWeatherIconMap).toBe(true);
  });

});
