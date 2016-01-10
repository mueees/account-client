(function () {
    'use strict';
    angular.module('account.landing').controller('LandingController', function ($scope, mueToken, mueAuthAccount) {
        $scope.hasToken = mueToken.hasToken;

        $scope.logout = function () {
            mueAuthAccount.logout();
        };
    });
})();