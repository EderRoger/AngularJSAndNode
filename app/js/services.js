'use strict';

/* Services */

angular.module('angularNodeServices', []).
  factory('socket', function (socketFactory) {
    return socketFactory();
  }).value('version', '0.1');