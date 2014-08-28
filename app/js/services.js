'use strict';

/* Services */

var angularNodeServices = angular.module('angularNodeServices', []);

angularNodeServices.factory('mySocket', function (socketFactory) {
  return socketFactory();
});
