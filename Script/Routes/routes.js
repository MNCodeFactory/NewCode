(function () {
    "use strict";

    var app = angular.module("iHandyApp")
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {url:"/", templateUrl:"Views/home.html"})
        .state('login', {url:"/login", templateUrl:"Views/login.html"})
        .state('orders', {url:"/orders", templateUrl:"Views/orders.html"})
        .state('checkout', {url:"/checkout", templateUrl:"Views/checkout.html"})
        .state('selectService', {url:"/select-service", templateUrl:"Views/select-service.html"});
      $urlRouterProvider.otherwise("/");
    });
}());
