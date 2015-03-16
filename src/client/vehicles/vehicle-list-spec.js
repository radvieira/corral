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

    vehicleData = [
      { make: 'Honda', vin: '123', plateNumber: 'abc-123' },
      { make: 'Toyota', vin: '321', plateNumber: '123-abc' }
    ];

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

  describe('summary', function() {

    it('should render vin number', function() {

      var directive,
          deferred = $q.defer();

      spyOn(Vehicles, 'list').and.returnValue(deferred.promise);

      deferred.resolve(vehicleData);

      directive = $compile('<vehicle-list></vehicle-list>')($scope);

      $scope.$digest();

      expect(directive[0].getElementsByClassName('vin')[0].innerHTML).toEqual(vehicleData[0].vin);

    });

    it('should render plate number', function() {

      var directive,
          deferred = $q.defer();

      spyOn(Vehicles, 'list').and.returnValue(deferred.promise);

      deferred.resolve(vehicleData);

      directive = $compile('<vehicle-list></vehicle-list>')($scope);

      $scope.$digest();

      expect(directive[0].getElementsByClassName('plate-number')[0].innerHTML).toEqual(vehicleData[0].plateNumber);

    });

    it('should render model', function() {

      var directive,
        deferred = $q.defer();

      spyOn(Vehicles, 'list').and.returnValue(deferred.promise);

      deferred.resolve(vehicleData);

      directive = $compile('<vehicle-list></vehicle-list>')($scope);

      $scope.$digest();

      expect(directive[0].getElementsByClassName('make')[0].innerHTML).toEqual(vehicleData[0].make);

    });

  });


});
