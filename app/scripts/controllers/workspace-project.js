'use strict';

angular.module('yokuApp')
  .controller('WorkspaceProjectCtrl', ['$rootScope','$scope','$routeParams', '$window', '$location', 'Workspace', function ($rootScope, $scope, $routeParams, $window, $location, Workspace) {
    // get workspace and project
    var wpArr  = Workspace.getProjectById($routeParams.id, $routeParams.pid);
    if (void 0 != wpArr) {
      $rootScope.data.selectedWorkspace = wpArr[0];
      $rootScope.data.selectedProject = wpArr[1];
    }
    // delete project
    $scope.deleteProject = function() {
      if($window.confirm('Are you sure you want to delete this Workspace?')) {
        var status = Workspace.deleteProjectById($rootScope.data.selectedWorkspace.id, $rootScope.data.selectedProject.id);
        if (status) {
          $location.path('/workspace-details/' + $rootScope.data.selectedWorkspace.id);
        }
        else {
          $window.alert("Invalid data, please try again later.");
        }
      }
    };
    // hide/show project details
    $scope.viewProjectDetails = false;  // project details will hide by default
    $scope.showProjectDetails = function() {
      $scope.viewProjectDetails = $scope.viewProjectDetails ? false : true;
    };
  }]);