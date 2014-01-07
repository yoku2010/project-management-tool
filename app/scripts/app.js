'use strict';

angular.module('yokuApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]).run(['$rootScope', 'Website', 'Menu', 'User', 'Workspace', function ($rootScope, Website, Menu, User, Workspace) {
  $rootScope.website = Website;
  $rootScope.menu = Menu;
  $rootScope.user = User;
  $rootScope.workspace = Workspace.workspace;
  $rootScope.workspaceType = Workspace.workspaceType;
  $rootScope.data = {};
  $rootScope.data.defaultWorkspace = { name : "Choose Workspace" };//$rootScope.workspace[0];
  $rootScope.data.selectedWorkspace = $rootScope.data.defaultWorkspace;
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
      .otherwise({
        redirectTo: '/404'
      });
  });
