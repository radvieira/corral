/**
 * Created by radvieira on 15-03-06.
 */
angular.module('corral.vehicles').directive('vehicleList', function(Vehicles) {

  'use strict';

  var tpl =
    '<div>' +
      '<p data-ng-if="isError">Could not get vehicles</p>' +
      '<ul data-ng-if="!isError">' +
        '<li data-ng-repeat="vehicle in vehicles">{{vehicle}}</li>' +
      '</ul>' +
    '</div>';

  return {
    restrict: 'E',
    scope: {},
    replace: true,
    template: tpl,
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