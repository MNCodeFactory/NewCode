(function () {
    "use strict";

    var app = angular.module("iHandyApp")
    .config(function($routeProvider){
      $routeProvider
        .when('/',{
          templateUrl: 'Views/main.html'
        })
        .when('/login', {
          templateUrl: 'Views/login.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
}());
