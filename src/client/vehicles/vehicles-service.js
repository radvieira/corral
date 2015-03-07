/**
 * Created by radvieira on 15-03-07.
 */
angular.module('corral.vehicles') .service('Vehicles', function($q) {

  'use strict';

  this.list = function() {
    var deferred = $q.defer();

    deferred.resolve([]);

    return deferred.promise;
  };

});