angular.module('mytoolboxApp').config(function($stateProvider) {
	'use strict';

	$stateProvider
	.state('home.authenticate', {
		abstract: true
	})
	.state('home.authenticate.login', {
		url: '/login',
		views: {
			'content@home': {
				templateUrl: 'scripts/authentication/login.html',
				controller: 'LoginCtrl as loginCtrl'
			}
		}
	})
	.state('home.authenticate.register', {
		url: '/register',
		views: {
			'content@home': {
				templateUrl: 'scripts/authentication/register.html',
				controller: 'RegisterCtrl as registerCtrl'
			}
		}
	});
});
