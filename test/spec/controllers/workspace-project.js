'use strict';

describe('Controller: WorkspaceProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('yokuApp'));

  var WorkspaceProjectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkspaceProjectCtrl = $controller('WorkspaceProjectCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
