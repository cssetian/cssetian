define([
  'angular',
  'filters',
  'services',
  'directives',
  'controllers',
  'angularRoute',
  ], function (angular, filters, services, directives, controllers) {
    'use strict';

    // Declare app level module which depends on filters, and services
    return angular.module('myApp', [
      'ngRoute',
      'myApp.filters',
      'myApp.services',
      'myApp.directives',
      'myApp.controllers',
      'ui.bootstrap'
    ]).
    config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
      $routeProvider.when('/code', {templateUrl: 'partials/code.html', controller: 'CodeCtrl'});
      $routeProvider.when('/random', {templateUrl: 'partials/random.html', controller: 'RandomCtrl'});
      $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
      $routeProvider.otherwise({redirectTo: '/home'});
    }]);
});
