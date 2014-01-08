'use strict';

angular.module('yokuApp')
  .controller('WorkspaceProjectCtrl', ['$rootScope','$scope','$routeParams', '$window', '$location', 'Workspace', function ($rootScope, $scope, $routeParams, $window, $location, Workspace) {
    for (var i = 0, ln = Workspace.workspace.length; i < ln; i++) {
      if (Workspace.workspace[i].id == $routeParams.id) {
        $rootScope.data.selectedWorkspace = Workspace.workspace[i];
        for (var j = 0, pln = Workspace.workspace[i].projects.length; j<pln; j++) {
          if (Workspace.workspace[i].projects[j].id == $routeParams.pid) {
            $rootScope.data.selectedProject = Workspace.workspace[i].projects[j];
          }
        }
        break;
      }
    }
    $scope.deleteProject = function() {
      if($window.confirm('Are you sure you want to delete this Workspace?')) {
        Workspace.deleteProjectById($rootScope.data.selectedWorkspace.id, $rootScope.data.selectedProject.id);
        $location.path('/workspace-details/' + $rootScope.data.selectedWorkspace.id);
      }
    };
    $scope.viewProjectDetails = false;
    $scope.showProjectDetails = function() {
      $scope.viewProjectDetails = $scope.viewProjectDetails ? false : true;
    };
  }]);