(function () {
    angular.module('account.core.components.helpers').directive('deviceHeight', function ($window, $timeout) {
        return {
            restrict: 'A',

            link: function ($scope, element) {
                element.css('height', $window.innerHeight + 'px');

                angular.element($window).bind('resize', function () {
                    element.css('height', $window.innerHeight + 'px');
                });
            }
        };
    });
})();