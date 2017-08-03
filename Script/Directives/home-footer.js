(function () {
    "use strict";

    var app = angular.module("iHandyApp")
    .directive('homeFooter',function(){
      return{
        restrict:'E',
        replace: 'true',
        templateUrl: 'Script/Directives/home-footer.html'
      };
    });
}());
