(function () {
    'use strict';

    angular.module('account.main').config(function ($stateProvider) {
        $stateProvider
            .state('app.main', {
                url: '/main',
                isLoginRequired: true,
                templateUrl: 'scripts/pages/main/main.view.html',
                controller: 'MainController'
            });
    });
})();