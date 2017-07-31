(function () {
    "use strict";

    angular
        .module("apiPath",
                    ["ngResource"])
    	.constant("appSettings",
        {
            serverPath: "http://ihandy.ir/api"
        });
}());
