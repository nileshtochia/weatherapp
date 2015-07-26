'use strict';

describe('Directive: currentWeather', function () {

  // load the directive's module
  beforeEach(module('weatherAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<current-weather></current-weather>');
    element = $compile(element)(scope);
  }));
});
