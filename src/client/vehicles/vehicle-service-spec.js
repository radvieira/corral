/**
 * Created by radvieira on 15-03-07.
 */
describe('Vehicles service spec', function() {

  'use strict';

  var Vehicles,
      $httpBackend,
      url = '/api/vehicles';

  beforeEach(function() {

    module('corral.vehicles');

    inject(function($injector) {
        Vehicles = $injector.get('Vehicles');
        $httpBackend = $injector.get('$httpBackend');
    });

  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


  describe('list', function() {

    it('should get from path', function() {

      $httpBackend.whenGET(url).respond([]);

      $httpBackend.expectGET(url);

      Vehicles.list();

      $httpBackend.flush();

    });

    it('should call success handler with data', function() {

      var success = jasmine.createSpy('success', function() {});

      $httpBackend.whenGET(url).respond([]);

      Vehicles.list().then(success);

      $httpBackend.flush();

      expect(success).toHaveBeenCalledWith([]);

    });

    it('should call error handler when request fails', function() {

      var failure = jasmine.createSpy('failure', function() {});

      $httpBackend.whenGET(url).respond(500);

      Vehicles.list().then(undefined /*not important here */, failure);

      $httpBackend.flush();

      expect(failure).toHaveBeenCalled();

    });

  });

});
