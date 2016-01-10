(function () {
    'use strict';

    angular.module('account.sign').config(function ($stateProvider) {
        $stateProvider
            .state('sign', {
                url: '/sign',
                isLoginRequired: false,
                templateUrl: 'scripts/pages/sign/sign.view.html',
                controller: 'SignController'
            });
    });
})();