angular.module('testapp.500', [
    'ui.router'
])

    .config(function ($stateProvider) {

        $stateProvider

            .state('app.500', {

                url: '/500',
                templateUrl: '500/500.tpl.html',
                controller: 'App500Ctrl as app500Ctrl'
            })
    })

    .controller('App500Ctrl', function App500Ctrl($log) {

        var app500Ctrl = this;

    })
;

