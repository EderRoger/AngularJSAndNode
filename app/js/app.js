'use strict';

/* App Module */

var phonecatApp = angular.module('angularNodeApp', [
  'ngRoute',
  'btford.socket-io',
  'angularNodeControllers',
  'angularNodeServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/tela1', {
        templateUrl: 'partials/tela1.html',
        controller: 'IndexCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
