angular.module('testapp.test', [
    'ui.router'
])

    .config(function ($stateProvider) {

        $stateProvider

            .state('app.test', {

                url: '/test',
                templateUrl: 'test/test.tpl.html',
                controller: 'TestCtrl as testCtrl'
            })
    })

    .controller('TestCtrl', function TestCtrl($http) {

        var testCtrl = this;

        testCtrl.callStatusService = function(status) {

            $http.get('/statusService/' + status).then(function (result) {

                console.log("serviceCall result: ", result);

            }, function (error) {

                console.log("serviceCall error: ", error);
            });
        }
    })
;

