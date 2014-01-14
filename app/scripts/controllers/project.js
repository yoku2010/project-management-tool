'use strict';

angular.module('yokuApp')
  .controller('ProjectCtrl', ['$rootScope', '$scope', '$routeParams', '$location', '$window', 'Workspace', function ($rootScope, $scope, $routeParams, $location, $window, Workspace) {
    $scope.project = {};
    
    // reset project form
    $scope.resetProjectForm = function() {
      $scope.form.$setPristine();
      $scope.project.name = '';
      $scope.project.wid = '';
      $scope.project.description = '';
    };

    // cancel add project form
    $scope.cancelAddProjectForm = function() {
      $location.path('/workspace-details/' + $rootScope.data.selectedWorkspace.id);
    };

    // cancel edit project form
    $scope.cancelEditProjectForm = function() {
      $location.path('/workspace-details/' + $rootScope.data.selectedWorkspace.id);
    };

    // add new project
    $scope.addProject = function() {
      var pid = Workspace.addProject($scope.project.name, $scope.project.wid, $scope.project.description);
      if (void 0 != pid) {
        //$scope.resetProjectForm();
        $window.alert('Project Added successfully.');
        $location.path('/workspace-project/' + $scope.project.wid + '/' + pid);
      }
      else {
        $window.alert('Data is corrupt please try again later.');
      }
    };

    // edit project
    $scope.editProject = function() {
      var pid = Workspace.editProject($rootScope.data.selectedProject.id, $scope.project.name, $scope.project.wid, $scope.project.description);
      if (void 0 != pid) {
        //$scope.resetProjectForm();
        $window.alert('Project Details Updated successfully.');
        $location.path('/workspace-project/' + $scope.project.wid + '/' + pid);
      }
      else {
        $window.alert('Data is corrupt please try again later.');
      }
    };

    // set data
    // check workspace id is passed in url
    if (void 0 != $routeParams.id && void 0 != $routeParams.pid) {
      var wpArr  = Workspace.getProjectById($routeParams.id, $routeParams.pid);
      if (void 0 != wpArr) {
        $rootScope.data.selectedWorkspace = wpArr[0];
        $rootScope.data.selectedProject = wpArr[1];
        $scope.project = wpArr[2];
      }
      else {
        $window.alert('Workspace id or Project id is invalid.');
      }
    }
    else if (void 0 != $routeParams.id) {
      var wArr = Workspace.getWorkspaceById($routeParams.id);
      if (void 0 != wArr) {
        $rootScope.data.selectedWorkspace = wArr[0];
        $scope.project.wid = wArr[0].id;
      }
      else {
        $window.alert('Workspace id is invalid');
      }
    }
  }]);