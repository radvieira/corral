/**
 * Created by radvieira on 15-03-06.
 */
describe('vehicle list', function() {

  'use strict';

  var $compile,
      $scope,
      Vehicles,
      vehicleData,
      $q;

  beforeEach(function() {

    vehicleData = ['honda', 'toyota'];

    module('corral.vehicles');

    inject(function($injector, $rootScope) {
      $scope = $rootScope.$new();
      $compile = $injector.get('$compile');
      Vehicles = $injector.get('Vehicles');
      $q = $injector.get('$q');
    });

  });

  it('should list returned vehicles', function() {

    var directive,
        deferred = $q.defer();

    spyOn(Vehicles, 'list').and.returnValue(deferred.promise);

    deferred.resolve(vehicleData);

    directive = $compile('<vehicle-list></vehicle-list>')($scope);

    $scope.$digest();

    expect(directive.find('li').length).toEqual(2);

  });

  it('should render error message when failure', function() {

    var directive,
        deferred = $q.defer();

    spyOn(Vehicles, 'list').and.returnValue(deferred.promise);

    deferred.reject({});

    directive = $compile('<vehicle-list></vehicle-list>')($scope);

    $scope.$digest();

    expect(directive.find('p')[0].innerText).toEqual('Could not get vehicles');

  });

  it('should not render list when failure', function () {

    var directive,
        deferred = $q.defer();

    spyOn(Vehicles, 'list').and.returnValue(deferred.promise);

    deferred.reject({});

    directive = $compile('<vehicle-list></vehicle-list>')($scope);

    $scope.$digest();

    expect(directive.find('ul').length).toEqual(0);

  });

  it('should not render error message when success', function() {

    var directive,
      deferred = $q.defer();

    spyOn(Vehicles, 'list').and.returnValue(deferred.promise);

    deferred.resolve(vehicleData);

    directive = $compile('<vehicle-list></vehicle-list>')($scope);

    $scope.$digest();

    expect(directive.find('p').length).toEqual(0);

  });

});
