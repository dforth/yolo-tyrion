angular.module('testapp.about', [
	'ui.router'
])

		.config(function ($stateProvider) {

			$stateProvider

					.state('about', {

						url: '/about',
						templateUrl: 'about/about.tpl.html',
						controller: 'AboutCtrl as aboutCtrl'
					})
		})

		.controller('AboutCtrl', function AboutCtrl($log) {

			var aboutCtrl = this;

		})
;

