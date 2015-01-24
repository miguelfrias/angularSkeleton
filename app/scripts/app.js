'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'ngCookies',
  'ngSanitize',
  'ngTouch',
  'myApp.Directives',
  'myApp.Filters',
  'myApp.Controllers'
]).
config(function($routeProvider) {

  var routes = [];

  routes.push({
    name: '/home',
    params: {
      templateUrl:  '',
      controller: ''
    }
  });

  $routeProvider.otherwise({
    redirectTo: '/home'
  });

  routes.forEach(function(route){
    $routeProvider.when(route.name, route.params);
  });

});

angular.module('myApp.Controllers', []).config(function () {});
angular.module('myApp.Directives', []).config(function () {});
angular.module('myApp.Filters', []).config(function () {});
