(function () {
    "use strict";

    var app = angular.module("iHandyApp")
    .directive('homeHeader',function(){
      return{
        restrict:'E',
        replace: 'true',
        templateUrl: 'Script/Directives/home-header.html'
      };
    });
}());
