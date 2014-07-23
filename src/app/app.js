angular.module('testapp', [
    'common',
    'ui.router',
    'ui.bootstrap',
    'testapp.links',
    'testapp.devo',
    'testapp.about',
    'testapp.test',
    'testapp.404',
    'testapp.500',
    'templates-app',
    'templates-common',
    'testapp.config'
])

    .config(function ($urlRouterProvider, $stateProvider, $httpProvider) {

        $stateProvider.state('app', {
            url: '/app',
            templateUrl: 'app.tpl.html',
            controller: 'AppCtrl as appCtrl'
        });

        $urlRouterProvider
            .when('/', '/app/links')
            .otherwise('/app/404')
        ;


        $httpProvider.interceptors.push(function($q, $location) {

            return {

                'request': function(config) {
                    console.log("request");
                    // do something on success
                    return config;
                },

                // optional method
                'requestError': function(rejection) {
                    console.log("requestError");
                    return $q.reject(rejection);
                },

                // optional method
                'response': function(response) {
                    console.log("response ", response.status);
                    // do something on success
                    return response;
                },

                // optional method
                'responseError': function(response) {

                    console.log("responseError status: ", response.status);

                    // do something on known errors
                    if (response.status == 404) {

                        // Redirect the site to our 404 page
                        $location.path('/app/404');

                    } else if (response.status == 500) {

                        // Redirect the site to our 500 page
                        $location.path('/app/500');
                    }

                    return $q.reject(response);

                }

            };

        });


    })

    .config(['$locationProvider', function ($location) {
        $location.html5Mode('true');
    }])


    .controller('AppCtrl', function AppCtrl($scope, $state) {
        var appCtrl = this;

        appCtrl.isState = function (stateName) {

            if ($state) {

                return $state.current.name == stateName;

            } else {

                return false;
            }

        };


    })

;