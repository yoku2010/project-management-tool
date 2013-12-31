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
  $rootScope.dafaultWorkscape = $rootScope.workspace[0];
  $rootScope.workspaceType = Workspace.workspaceType;
}]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/404', {
        templateUrl: '404.html',
      })
      .when('/workspace', {
        templateUrl: 'views/workspace.html',
        controller: 'WorkspaceCtrl'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
