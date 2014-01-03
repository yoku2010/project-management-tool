'use strict';

angular.module('yokuApp')
  .controller('WorkspaceCtrl', ['$scope', '$window', '$location', 'Workspace', function ($scope, $window, $location, Workspace) {
    
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
      Workspace.addWorkspace($scope.works.name, $scope.works.member, $scope.works.type, $scope.works.description);
      $scope.resetWorkspaceForm();
      $location.url();
      alert("Workspace Added successfully.");
    };
  }]);