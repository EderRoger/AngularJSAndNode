'use strict';

/* Controllers */

var angularNodeControllers = angular.module('angularNodeControllers', []);

angularNodeControllers.controller('IndexCtrl', ['$scope','$http','socket',
  function($scope, $http, socket) {
    $scope.msg = 'Hello World';
    
    socket.on('send:name', function (data) {
      $scope.name = data.name;
    });

  }]);