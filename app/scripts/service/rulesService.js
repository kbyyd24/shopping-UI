angular.module('shoppingUiNgApp')
    .service('rulesService', ['$http', 'webConfig', function($http, webConfig) {
        var self = this;

        self.getRules = function() {
            return $http.get(webConfig.api.host + "rules")
                .then(function(response) {
                    return response.data;
                })
        };
    }]);
