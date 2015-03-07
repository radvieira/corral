/**
 * Created by radvieira on 15-03-07.
 */
describe('Vehicles service spec', function() {

  'use strict';

  var Vehicles,
      $rootScope;

  beforeEach(function() {

    module('corral.vehicles');

    inject(function($injector) {
        Vehicles = $injector.get('Vehicles');
        $rootScope = $injector.get('$rootScope');
    });

  });

  it('should call success handler with data', function() {

    var success = jasmine.createSpy('success', function() {});

    Vehicles.list().then(success);

    $rootScope.$digest();

    expect(success).toHaveBeenCalledWith([]);

  });

});