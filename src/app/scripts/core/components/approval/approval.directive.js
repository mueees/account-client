(function () {
    angular.module('account.core.components.approval').directive('accountApproval', function (ApplicationResource, growl) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/core/components/approval/approval.directive.view.html',

            scope: {
                accountConfig: '='
            },

            link: function ($scope) {
                ApplicationResource.get($scope.accountConfig.applicationId).then(function (application) {
                    if (application.auth) {
                        ApplicationResource.approve($scope.accountConfig.applicationId).then(function (data) {
                            window.location.href = data.redirectUrl;
                        });
                    } else {
                        growl.addErrorMessage('Cannot use this application');
                    }
                });
            }
        };
    });
})();