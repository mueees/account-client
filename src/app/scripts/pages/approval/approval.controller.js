(function () {
    'use strict';
    angular.module('account.approval').controller('ApprovalController', function ($scope, $state) {
        $scope.approvalConfig = {
            applicationId: $state.params.applicationid
        };
    });
})();