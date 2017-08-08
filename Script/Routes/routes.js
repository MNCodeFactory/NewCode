(function () {
    "use strict";

    var app = angular.module("iHandyApp")
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {url:"/", templateUrl:"Views/home.html"})
        .state('account', {url: "/account", templateUrl:"Views/account/index.html",
          controller: function($state){
            $state.go("login");
          }
        })
        .state('login', {parent: "account", url: "/login", templateUrl:"Views/account/login.html"})
        .state('register', {parent: "account", url: "/register", templateUrl:"Views/account/register.html"})
        .state('verify', {parent: "account", url: "/verify", templateUrl:"Views/account/verify.html"})
        .state('forget', {parent: "account", url: "/forget", templateUrl:"Views/account/forget.html"})
        .state('detail', {parent: "account", url: "/detail", templateUrl:"Views/detail.html"})
        .state('orders', {url:"/orders", templateUrl:"Views/orders.html"})
        .state('checkout', {url:"/checkout", templateUrl:"Views/checkout.html"})
        .state('selectService', {url:"/select-service", templateUrl:"Views/select-service.html"});
      $urlRouterProvider.otherwise("/");
    });
}());
