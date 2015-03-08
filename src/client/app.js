/**
 * Created by radvieira on 15-03-07.
 */
(function(ng) {

  'use strict';

  var corral = ng.module('corral', ['ngRoute', 'corral.vehicles']);

  corral.config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'layout/landing.tpl.html'
    });
  });

}(angular));
