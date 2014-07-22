angular.module('testapp', [
  'common',
  'ui.router',
  'ui.bootstrap',
  'testapp.links',
  'testapp.devo',
  'testapp.about',
  'templates-app',
  'templates-common',
  'testapp.config',
  'chieffancypants.loadingBar'
])

  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/links');
  })

  .config(['$locationProvider', function($location) {
    $location.html5Mode('true');
  }])


.controller('AppCtrl', function AppCtrl($scope, $state) {
    var appCtrl = this;

        appCtrl.isState = function(stateName) {

            if ($state) {

                return $state.current.name == stateName;

            } else {

                return false;
            }

        };


  })

;