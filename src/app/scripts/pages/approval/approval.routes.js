(function () {
    'use strict';

    angular.module('account.approval').config(function ($stateProvider) {
        $stateProvider
            .state('approval', {
                url: '/approval?applicationid',
                isLoginRequired: true,
                templateUrl: 'scripts/pages/approval/approval.view.html',
                controller: 'ApprovalController'
            });
    });
})();