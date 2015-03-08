/**
 * Created by radvieira on 15-03-07.
 */
describe('Vehicles', function() {

  'use strict';

  it('should list vehicles', function() {

    browser.get('http://localhost:3000/');

    var vehicles = element.all(by.css('ul li'));
    expect(vehicles.count()).toEqual(2);

  });

});