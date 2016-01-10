(function () {
    angular.module('account.core.components.sign').directive('accountSign', function (mueAuthAccount, $state) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/core/components/sign/sign.directive.view.html',

            scope: {
                accountConfig: '='
            },

            link: function ($scope, element) {
                element.find('input')[0].focus();

                $scope.sign = function () {
                    $scope.disabled = false;

                    mueAuthAccount.login({
                        email: $scope.email,
                        password: $scope.password
                    }).then(function () {
                        // $state.go('landing');
                    }).finally(function () {
                        $scope.disabled = false;
                    });
                };
            }
        };
    });
})();