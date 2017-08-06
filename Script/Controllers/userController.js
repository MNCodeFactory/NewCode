(function () {
    "use strict";

    angular
        .module("iHandyApp")
        .controller("UserCtrl",
                    ["userAccount",
                        "currentUser",
                        UserCtrl]);

    function UserCtrl(userAccount, currentUser) {
        var vm = this;
        vm.isLoggedIn = function () {
            return currentUser.getProfile().isLoggedIn;
        };
        vm.message = '';
        vm.userData = {
            username: '',
            email: '',
            password: '',
            name: '',
            family: '',
            countryId: ''
        };

        vm.registerMobileNumber = function () {

            userAccount.registration.registerMobileNumber(vm.userData,
                function (data) {
                    vm.message = "... Registration successful";
                },
                function (response) {
                    vm.isLoggedIn = false;
                    vm.message = response.statusText + "\r\n";
                    if (response.data.exceptionMessage)
                        vm.message += response.data.exceptionMessage;

                    // Validation errors
                    if (response.data.modelState) {
                        for (var key in response.data.modelState) {
                            vm.message += response.data.modelState[key] + "\r\n";
                        }
                    }
                });
        }

        vm.verifyRegistration = function () {
            vm.verify = {
              username: vm.userData.username,
              code: ''
            }

            userAccount.verifyRegistration.verifyRegistration(vm.verify,
            function(data){
              vm.message = "... Verified";
              $state.go("confirm");
            },
            function (response) {
                vm.isLoggedIn = false;
                vm.message = response.statusText + "\r\n";
                if (response.data.exceptionMessage)
                    vm.message += response.data.exceptionMessage;

                // Validation errors
                if (response.data.modelState) {
                    for (var key in response.data.modelState) {
                        vm.message += response.data.modelState[key] + "\r\n";
                    }
                }
            });
        }

        vm.login = function () {
            vm.userData.grant_type = "password";

            userAccount.login.login(vm.userData,
                function (data) {
                    vm.message = "";
                    vm.password = "";
                    currentUser.setProfile(vm.userData.username, data.access_token);
                },
                function (response) {
                    vm.password = "";
                    vm.message = response.statusText + "\r\n";
                    if (response.data.exceptionMessage)
                        vm.message += response.data.exceptionMessage;

                    if (response.data.error) {
                        vm.message += response.data.error;
                    }
                });
        }
    }
})();
