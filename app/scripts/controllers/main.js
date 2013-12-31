'use strict';

angular.module('yokuApp')
  .controller('MainCtrl', ['$scope', 'Workspace', function ($scope, Workspace) {
    $scope.newWorkspaceType = [];
    for (var i = 0; i < Workspace.workspaceType.length; i++) {
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