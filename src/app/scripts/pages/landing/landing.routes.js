(function () {
    'use strict';

    angular.module('account.landing').config(function ($stateProvider) {
        $stateProvider
            .state('landing', {
                url: '/landing',
                isLoginRequired: false,
                templateUrl: 'scripts/pages/landing/landing.view.html',
                controller: 'LandingController'
            });
    });
})();