'use strict';

/* Controllers */

var angularNodeControllers = angular.module('angularNodeControllers', []);

angularNodeControllers.controller('IndexCtrl', ['$scope','$http',
  function($scope, $http) {
    $scope.msg = 'Hello World';
  }]);