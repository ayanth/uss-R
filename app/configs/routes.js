/**
 * Created by antoine on 2016-08-01.
 */
'use strict';
angular.module('Husser').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider.
		state('main', {
			url: '/',
			templateUrl: '/app/views/main.view.html'
		});
	}
]);
