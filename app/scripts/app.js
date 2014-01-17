'use strict';

angular.module('yokuApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
]).run(['$rootScope', '$location', 'Website', 'Menu', 'User', 'Workspace', function ($rootScope, $location, Website, Menu, User, Workspace) {
  $rootScope.website = Website;
  $rootScope.menu = Menu;
  $rootScope.user = User;
  $rootScope.workspace = Workspace.workspace;
  $rootScope.workspaceType = Workspace.workspaceType;
  $rootScope.data = {};
  $rootScope.data.defaultWorkspace = { name : 'Choose Workspace' };//$rootScope.workspace[0];
  $rootScope.data.selectedWorkspace = $rootScope.data.defaultWorkspace;
  $rootScope.getWorkspace = function() {
    if (void 0 !== $rootScope.data.selectedWorkspace.id) {
      $location.path('/workspace-details/' + $rootScope.data.selectedWorkspace.id);
    }
  };
}]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/404', {
        templateUrl: '404.html',
      })
      .when('/workspace/', {
        templateUrl: 'views/workspace.html',
        controller: 'WorkspaceCtrl'
      })
      .when('/workspace/:id', {
        templateUrl: 'views/workspace.html',
        controller: 'WorkspaceCtrl'
      })
      .when('/workspace-details/:id', {
        templateUrl: 'views/workspace-details.html',
        controller: 'WorkspaceDetailsCtrl'
      })
      .when('/workspace-project/:id/:pid', {
        templateUrl: 'views/workspace-project.html',
        controller: 'WorkspaceProjectCtrl'
      })
      .when('/project/:id', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/project/:id/:pid', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
