'use strict';

describe('Controller: WorkspaceDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('yokuApp'));

  var WorkspaceDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkspaceDetailsCtrl = $controller('WorkspaceDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of viewWorkspaceDetails to the scope', function () {
    expect(scope.viewWorkspaceDetails).toBe(false);
  });
});
