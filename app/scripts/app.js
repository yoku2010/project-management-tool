'use strict';

angular.module('yokuApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
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
