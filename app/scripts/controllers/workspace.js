'use strict';

angular.module('yokuApp')
  .controller('WorkspaceCtrl', ['$rootScope', '$scope', '$routeParams', '$window', '$location', 'Workspace', function ($rootScope, $scope, $routeParams, $window, $location, Workspace) {
    // reset workspace form
    $scope.resetWorkspaceForm = function() {
      $scope.form.$setPristine();
      $scope.works.name = '';
      $scope.works.member = '';
      $scope.works.type = '';
      $scope.works.description = '';
    };

    // cancel workspace form
    $scope.cancelWorkspaceForm = function() {
      $window.history.back();
    };

    // add new workspace
    $scope.addWorkspace = function() {
      var id = Workspace.addWorkspace($scope.works.name, $scope.works.member, $scope.works.type, $scope.works.description);
      $scope.resetWorkspaceForm();
      $window.alert('Workspace Added successfully.');
      $location.path('/workspace-details/' + id);
    };

    // set data
    if (void 0 !== $routeParams.id) {
      for (var i = 0, ln = Workspace.workspace.length; i < ln; i++) {
        if (Workspace.workspace[i].id == $routeParams.id) {
          $rootScope.data.selectedWorkspace = Workspace.workspace[i];
        }
      }
      $scope.works = Workspace.getWorkspaceById($routeParams.id);
      // edit workspace
      $scope.editWorkspace = function() {
        var id = Workspace.editWorkspaceById($rootScope.data.selectedWorkspace.id, $scope.works.name, $scope.works.member, $scope.works.type, $scope.works.description);
        $scope.resetWorkspaceForm();
        $window.alert('Workspace Details Updated successfully.');
        $location.path('/workspace-details/' + id);
      };
    }
    else {
      $rootScope.data.selectedWorkspace = $rootScope.data.defaultWorkspace;
    }
  }]);