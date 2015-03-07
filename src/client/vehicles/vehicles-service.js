/**
 * Created by radvieira on 15-03-07.
 */
angular.module('corral.vehicles') .service('Vehicles', function($q, $http) {

  'use strict';

  this.list = function() {

    var deferred = $q.defer();

    $http.get('/api/vehicles').then(
      function(response) {
        deferred.resolve(response.data);
      },
      function() {
        deferred.reject();
      }
    );

    return deferred.promise;

  };

});