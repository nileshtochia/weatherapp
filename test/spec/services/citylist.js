'use strict';

describe('Service: cityList', function () {

  // load the service's module
  beforeEach(module('weatherAppApp'));

  // instantiate service
  var cityList;
  beforeEach(inject(function (_cityList_) {
    cityList = _cityList_;
  }));

  it('should do something', function () {
    expect(!!cityList).toBe(true);
  });

});
