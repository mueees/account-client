(function () {
    'use strict';
    angular.module('account.core.resources').factory('ApplicationResource', function ($q, MueResource) {
        var Application = MueResource.withConfig(function (RestangularConfigurer) {});

        return {
            get: function (id) {
                return Application.one('/application/by/applicationid/' + id).get();
            },

            approve: function (applicationId) {
                return Application.all('/oauth/auth').post({
                    applicationId: applicationId
                });
            }
        };
    });
})();