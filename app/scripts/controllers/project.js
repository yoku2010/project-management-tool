'use strict';

angular.module('yokuApp')
  .controller('ProjectCtrl', function ($scope) {
    // cancel workspace form
    $scope.cancelWorkspaceForm = function() {
      $location.path('/');
    };
  });
