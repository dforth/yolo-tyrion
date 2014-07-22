angular.module('testapp.devo', [
	'ui.router'
])

		.config(function ($stateProvider) {

			$stateProvider

					.state('devo', {

						url: '/devo',
						templateUrl: 'devo/devo.tpl.html',
						controller: 'DevoCtrl as devoCtrl'
					})
		})

		.controller('DevoCtrl', function DevoCtrl($log) {

			var devoCtrl = this;

            devoCtrl.imageUrl = "../assets/img/devo.jpg";
		})
;

