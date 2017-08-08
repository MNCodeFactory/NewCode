(function () {
    "use strict";

    var app = angular.module("iHandyApp")
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {url:"/", templateUrl:"Views/home.html"})
        .state('account', {url: "/account", templateUrl:"Views/Account/index.html",
          controller: function($state){
            $state.go("login");
          }
        })
        .state('login', {parent: "account", url: "/login", templateUrl:"Views/Account/login.html"})
        .state('register', {parent: "account", url: "/register", templateUrl:"Views/Account/register.html"})
        .state('verify', {parent: "account", url: "/verify", templateUrl:"Views/Account/verify.html"})
        .state('forget', {parent: "account", url: "/forget", templateUrl:"Views/Account/forget.html"})
        .state('detail', {parent: "account", url: "/detail", templateUrl:"Views/detail.html"})
        .state('orders', {url:"/orders", templateUrl:"Views/Dashboard/orders.html"})
        .state('checkout', {url:"/checkout", templateUrl:"Views/Dashboard/checkout.html"})
        .state('selectService', {url:"/select_service", templateUrl:"Views/Dashboard/select_service.html"});
      $urlRouterProvider.otherwise("/");
    });
}());
