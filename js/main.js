require.config({
  paths: {
    angular: 'js/lib/angular',
    angularRoute: 'js/lib/angular-route',
    angularMocks: 'js/lib/angular-mocks',

    text: 'js/lib/text',
    jquery: 'js/lib/jquery/jquery-2.1.0',
    underscore: 'js/lib/underscore/underscore-1.6.0',
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angularRoute': ['angular'],
    'angularMocks': {
      deps:['angular'],
      'exports':'angular.mock'
    }
  },
  priority: [
    "angular"
  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
  'angular',
  'app',
  'routes'
], function(angular, app, routes) {
  'use strict';
  var $html = angular.element(document.getElementsByTagName('html')[0]);

  angular.element().ready(function() {
    angular.resumeBootstrap([app['name']]);
  });
});