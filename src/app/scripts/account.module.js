(function () {
    'use strict';

    angular.module('account', [
        'ui.router',
        'ui.bootstrap',

        'mue.helpers',
        'mue.core.error-handler',

        /*pages*/
        'account.approval',
        'account.landing',
        'account.sign'
    ]);
})();