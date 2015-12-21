(function () {
    angular.module('account.core.components.sign').directive('accountSign', function (mueAuthAccount) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/core/components/sign/sign.directive.view.html',

            scope: {
                accountConfig: '='
            },

            link: function () {
                mueAuthAccount.login({
                    email: 'mue.miv@gmail.com',
                    password: '123123'
                });
            }
        }
    });
})();