/**
 * Created by radvieira on 15-03-06.
 */
describe('vehicle list', function() {

  var $compile,
      $scope;

  beforeEach(function() {

    module('corral.vehicles.directives');

    inject(function($injector, $rootScope) {
      $scope = $rootScope.$new();
      $compile = $injector.get('$compile');
    });

  });

  it('should list vehicles in $scope', function() {

    var directive;

    $scope.vehicles = ['honda', 'toyota'];

    directive = $compile('<vehicle-list vehicles="vehicles"></vehicle-list>')($scope);

    $scope.$digest();

    expect(directive.find('li').length).toEqual(2);

  });

});
