'use strict';

angular.module('yokuApp')
  .controller('WorkspaceDetailsCtrl', ['$rootScope','$scope','$routeParams', '$window', '$location', 'Workspace', function ($rootScope, $scope, $routeParams, $window, $location, Workspace) {
    for (var i = 0, ln = Workspace.workspace.length; i < ln; i++) {
      if (Workspace.workspace[i].id == $routeParams.id) {
        $rootScope.data.selectedWorkspace = Workspace.workspace[i];
      }
    }
    $scope.deleteWorkspace = function() {
      if($window.confirm('Are you sure you want to delete this Workspace?')) {
        Workspace.deleteWorkspaceById($rootScope.data.selectedWorkspace.id);
        $location.path('/');
      }
    };
    $scope.viewWorkspaceDetails = false;
    $scope.showWorkspaceDetails = function() {
      $scope.viewWorkspaceDetails = $scope.viewWorkspaceDetails ? false : true;
    };
  }]);