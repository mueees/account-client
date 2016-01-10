(function () {
    'use strict';
    angular.module('account').config(function (accountConfigProvider,
                                               MueResourceProvider,
                                               $urlRouterProvider,
                                               $httpProvider,
                                               mueAuthenticationProvider) {
        $urlRouterProvider.otherwise("landing");

        MueResourceProvider.setBaseUrl('/api');

        $httpProvider.interceptors.push('mueHttpResponseErrorInterceptor');

        mueAuthenticationProvider.loginState('sign');
        mueAuthenticationProvider.appState('landing');
    });
})();