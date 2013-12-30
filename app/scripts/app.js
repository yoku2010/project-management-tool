'use strict';

angular.module('yokuApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]).run(['$rootScope', '$website', '$menu', 'User', 'Workspace', function ($rootScope, $website, $menu, User, Workspace) {
  $rootScope.menu = $menu;
  $rootScope.website = $website;
  $rootScope.user = User;
  $rootScope.workspace = Workspace.workspace;
  $rootScope.dafaultWorkscape = $rootScope.workspace[0];
  console.log(User);
}]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/404', {
        templateUrl: '404.html',
        controller: 'WorkspaceCtrl'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
