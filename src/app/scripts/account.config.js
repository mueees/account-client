(function () {
    'use strict';
    angular.module('account').config(function (accountConfigProvider, MueResourceProvider, $urlRouterProvider, mueAuthenticationProvider) {
        $urlRouterProvider.otherwise("app/main");

        MueResourceProvider.setBaseUrl('/api');

        mueAuthenticationProvider.loginState('login');
        mueAuthenticationProvider.appState('app.main');
    });
})();