'use strict';

angular.module('awmEjemploApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
