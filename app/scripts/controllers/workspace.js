'use strict';

angular.module('yokuApp')
  .controller('WorkspaceCtrl', ['$scope', 'Workspace', function ($scope, Workspace) {
    $scope.workspace = Workspace.Workspace;
    $scope.addWorkspace = function() {
    	
    }
  }]);