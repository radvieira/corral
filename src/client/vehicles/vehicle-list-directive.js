/**
 * Created by radvieira on 15-03-06.
 */
angular.module('corral.vehicles').directive('vehicleList', function(Vehicles) {

  'use strict';

  return {
    restrict: 'E',
    scope: {},
    replace: true,
    templateUrl: 'vehicles/vehicle-list.tpl.html',
    link: function($scope) {

      Vehicles.list().then(function(vehicles) {
        delete $scope.isError;
        $scope.vehicles = vehicles;
      }, function() {
        $scope.isError = true;
      });

    }
  };

});
