(function () {
    "use strict";

    angular
        .module("apiPath")
        .factory("userAccount",
                ["$resource",
                 "appSettings",
                    userAccount])

    function userAccount($resource, appSettings) {
        return {
            registration: $resource(appSettings.serverPath + "/api/User/RegisterMobileNumber", null,
                    {
                        'registerMobileNumber': { method: 'POST' }
                    }),
            verifyRegistration: $resource(appSettings.serverPath + "/api/User/VerifyRegistration", null,
                    {
                        'verifyRegistration': { method: 'POST' }
                    }),
            login: $resource(appSettings.serverPath + "/api/User/Authenticate", null,
                    {
                        'login': {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            transformRequest: function (data, headersGetter) {
                                var str = [];
                                for (var d in data)
                                    str.push(encodeURIComponent(d) + "=" +
                                                        encodeURIComponent(data[d]));
                                return str.join("&");
                            }

                        }
                    })
        }
    }
})();
