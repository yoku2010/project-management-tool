'use strict';

angular.module('yokuApp')
  .controller('MainCtrl', ['$scope', 'Workspace', function ($scope, Workspace) {
    $scope.newWorkspaceType = [];
    $scope.data = {};
    $scope.showWorkspaceDetails = function(workspaceType) {
      $scope.data.activeWorkspace = workspaceType;
    }
    $scope.hideWorkspaceDetails = function() {
      $scope.data.activeWorkspace = null;
    };
    for (var i = 0; i < Workspace.workspaceType.length; i++) {
      // to show default workspace
      //$scope.data.activeWorkspace = Workspace.workspaceType[0].name;
      $scope.newWorkspaceType[i] = {
        name: Workspace.workspaceType[i].name,
        icon: Workspace.workspaceType[i].icon,
        workspace: []
      };
      for (var j = 0; j < Workspace.workspace.length; j++) {
      	if (Workspace.workspace[j].type == Workspace.workspaceType[i].name) {
      	  $scope.newWorkspaceType[i].workspace.push(Workspace.workspace[j]);
        }
      }
    }
  }]);