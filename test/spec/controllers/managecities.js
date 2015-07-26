'use strict';

describe('Controller: ManagecitiesCtrl', function () {

  // load the controller's module
  beforeEach(module('weatherAppApp'));

  var ManagecitiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagecitiesCtrl = $controller('ManagecitiesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of cityList to the scope', function () {
    expect(scope.cityList.length).toBe(1);
  });
  
  it('should set the new city to null after add', function () {
    scope.newCity = { id: 1 };
    
    scope.addCity();
    
    expect(scope.newCity).toBe(null);
  });
});
