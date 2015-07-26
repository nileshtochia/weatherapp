'use strict';

describe('Service: TEMPLATEPATHS', function () {

  // load the service's module
  beforeEach(module('weatherAppApp'));

  // instantiate service
  var TEMPLATEPATHS;
  beforeEach(inject(function (_TEMPLATEPATHS_) {
    TEMPLATEPATHS = _TEMPLATEPATHS_;
  }));

  it('should do something', function () {
    expect(!!TEMPLATEPATHS).toBe(true);
  });

});
