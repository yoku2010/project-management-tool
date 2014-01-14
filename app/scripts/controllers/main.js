'use strict';

angular.module('yokuApp')
  .controller('MainCtrl', ['$rootScope', '$scope', 'Workspace', function ($rootScope, $scope, Workspace) {
    $scope.newWorkspaceType = []; // to store saparated workspaces by type
    $scope.taskList = []; // to store all the tasks in list
    $scope.local = {};  // to store current page data object
    $rootScope.data.selectedWorkspace = $rootScope.data.defaultWorkspace; // select default workspace

    // to show workspaces list on dashboard
    $scope.showWorkspaceDetails = function(workspaceType) {
      $scope.local.activeWorkspace = workspaceType;
    };

    // to hide workspaces list on dashboard
    $scope.hideWorkspaceDetails = function() {
      $scope.local.activeWorkspace = null;
    };

    var taskListNotFilled = true;
    // to saparate workspaces by type
    for (var i = 0; i < Workspace.workspaceType.length; i++) {
      // add workspace type
      $scope.newWorkspaceType[i] = {
        name: Workspace.workspaceType[i].name,
        icon: Workspace.workspaceType[i].icon,
        workspace: []
      };
      // add workspaces by their type
      for (var j = 0; j < Workspace.workspace.length; j++) {
        if (Workspace.workspace[j].type == Workspace.workspaceType[i].name) {
          $scope.newWorkspaceType[i].workspace.push(Workspace.workspace[j]);
        }
        if (taskListNotFilled) {
          
        }
      }
      taskListNotFilled = false;
    }
  }]);