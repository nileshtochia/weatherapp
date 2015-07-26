'use strict';

describe('Directive: weatherList', function () {

  // load the directive's module
  beforeEach(module('weatherAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<weather-list></weather-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the weatherList directive');
  }));
});
