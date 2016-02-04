(function () {
    'use strict';

    angular.module('account').provider('accountConfig', function () {
        var config = {
            /*environment: 'production'*/
        };

        function isProduction() {
            return config.environment == 'production';
        }

        function get(name) {
            return config[name];
        }

        function set(name, value) {
            config[name] = value;
        }

        function getConfig() {
            return config;
        }

        return {
            isProduction: isProduction,
            getConfig: getConfig,
            $get: {
                isProduction: isProduction
            }
        };
    });
})();