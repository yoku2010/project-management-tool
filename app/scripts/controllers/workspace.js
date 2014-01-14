'use strict';

angular.module('yokuApp')
  .controller('WorkspaceCtrl', ['$rootScope', '$scope', '$routeParams', '$window', '$location', 'Workspace', function ($rootScope, $scope, $routeParams, $window, $location, Workspace) {
    // reset workspace form
    $scope.resetWorkspaceForm = function() {
      $scope.form.$setPristine(); // reset form
      $scope.works.name = '';
      $scope.works.member = '';
      $scope.works.type = '';
      $scope.works.description = '';
    };

    // cancel add workspace form
    $scope.cancelAddWorkspaceForm = function() {
      $location.path('/');
    };
    // cancel edit workspace form
    $scope.cancelEditWorkspaceForm = function() {
      $location.path('/workspace-details/' + $rootScope.data.selectedWorkspace.id);
    };

    // add new workspace
    $scope.addWorkspace = function() {
      var id = Workspace.addWorkspace($scope.works.name, $scope.works.member, $scope.works.type, $scope.works.description);
      if (void 0 != id ) {
        $scope.resetWorkspaceForm();
        $window.alert('Workspace Added successfully.');
        $location.path('/workspace-details/' + id);
      }
      else {
        $window.alert('Data is corrupt please try again later.');
      }
    };

    // set data
    if (void 0 !== $routeParams.id) {
      // to get workspace
      var wArr = Workspace.getWorkspaceById($routeParams.id);
      if (void 0 != wArr) {
        $rootScope.data.selectedWorkspace = wArr[0];  // selected workspace object
        $scope.works = wArr[1]; // fill data in form

        // edit workspace
        $scope.editWorkspace = function() {
          var id = Workspace.editWorkspaceById($rootScope.data.selectedWorkspace.id, $scope.works.name, $scope.works.member, $scope.works.type, $scope.works.description);
          if (void 0 != id ) {
            $scope.resetWorkspaceForm();
            $window.alert('Workspace Details Updated successfully.');
            $location.path('/workspace-details/' + id);
          }
          else {
            $window.alert('Data is corrupt please try again later.');
          }
        };
      }
      else {
        // workspace id is invalid so this will open workspace form to add a workspace.
        $rootScope.data.selectedWorkspace = $rootScope.data.defaultWorkspace;
      }
    }
    else {
      // select default workspace
      $rootScope.data.selectedWorkspace = $rootScope.data.defaultWorkspace;
    }
  }]);