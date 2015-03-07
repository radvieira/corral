/**
 * Created by radvieira on 15-03-06.
 */
angular.module('corral.vehicles.directives').directive('vehicleList', function() {

  return {
    restrict: 'E',
    scope: { vehicles: '=' },
    replace: true,
    template: '<ul><li data-ng-repeat="vehicle in vehicles">{{vehicle}}</li></ul>'
  };

});