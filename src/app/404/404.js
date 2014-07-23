angular.module('testapp.404', [
    'ui.router'
])

    .config(function ($stateProvider) {

        $stateProvider

            .state('app.404', {

                url: '/404',
                templateUrl: '404/404.tpl.html',
                controller: 'App404Ctrl as app404Ctrl'
            })
    })

    .controller('App404Ctrl', function App404Ctrl($log) {

        var app404Ctrl = this;

    })
;

