//var NewsApp = angular.module('NewsApp', []);


angular.module('NewsApp')
    .controller('LoginController', ['$scope', '$window', function ($scope, $window) {
        $scope.showRegistration = false;
        $scope.userLogins = [];



        $scope.showRegistrationChange = function (){
            $scope.showRegistration = true;
        }

        $scope.register = function () {
            var inputs = document.getElementsByClassName("registrationInputs");
            var successMsg = document.getElementById("successMsg");
            var email = inputs[0].value;
            var password = inputs[1].value;
            var user = {e: email, p: password};

            addUser(user);
            inputs[0].value = "";
            inputs[1].value = "";
            successMsg.innerHTML = "User succesfully registered!";
        }

        $scope.login = function () {

            var inputs = document.getElementsByClassName("loginInputs");
            var email = inputs[0].value;
            var password = inputs[1].value;
            var user = {e: email, p: password};

            var loginObj = userValidate(user);

            if (loginObj.userValidated === true)
                $window.location.href = 'NewsApp.html';
            else
                ;
        }

        var addUser = function (user) {
            $scope.userLogins.push(user);
        }

        var userValidate = function (user) {

            for (var u = 0; u < $scope.userLogins.length; u++) {
                if (user.e === $scope.userLogins[u].e && user.p === $scope.userLogins[u].p)
                    return {userValidated: true, errorMsg: ""};
                else if (user.e === $scope.userLogins[u].e && user.p != $scope.userLogins[u].p)
                    return {userValidated: false, errorMsg: "Incorrect Password."};
            }

            return {userValidated: false, errorMsg: "User not found."};
        }

    }])
/*
angular.module('telavox.test', [])
    .factory('MySimulatedSlowHTTPService', function($q, $timeout) {
        var deferred = $q.defer();
        $timeout(function() {
            // Simulated slow fetch from an HTTP server
            deferred.reject("Could not fetch the list :-(")
        }, 3000);
        return deferred.promise;
    })
    .controller('MyTestController', function($scope, MySimulatedSlowHTTPService) {*/
