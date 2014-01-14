'use strict';

angular.module('yokuApp')
  .controller('WorkspaceDetailsCtrl', ['$rootScope','$scope','$routeParams', '$window', '$location', 'Workspace', function ($rootScope, $scope, $routeParams, $window, $location, Workspace) {
    $rootScope.data.selectedProject = null;
    // to get workspace
    var wArr = Workspace.getWorkspaceById($routeParams.id);
    if (void 0 != wArr) {
      $rootScope.data.selectedWorkspace = wArr[0];
    }
    // to delete workspace.
    $scope.deleteWorkspace = function() {
      if($window.confirm('Are you sure you want to delete this Workspace?')) {
        var status = Workspace.deleteWorkspaceById($rootScope.data.selectedWorkspace.id);  // delete workspace
        if (status) {
          $location.path('/');
        }
        else {
          $window.alert("Invalid data, please try again later.");
        }
      }
    };

    // workspace details will hide by default.
    $scope.viewWorkspaceDetails = false;

    // hide/show workspace details.
    $scope.showWorkspaceDetails = function() {
      $scope.viewWorkspaceDetails = $scope.viewWorkspaceDetails ? false : true;
    };
  }]);