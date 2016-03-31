angular.module("mytoolboxApp").config(function($stateProvider) {
	'use strict';

	$stateProvider
	.state('home', {
		url: '/',
		views: {
			'': {
				templateUrl: 'scripts/home/home.html',
				controller: 'HomeCtrl as homeCtrl'
			},
			'header@home': {
				templateUrl: 'scripts/home/header.html'
			}
		}
	})
	.state('home.login', {
		url: 'login',
		views: {
			'body@home': {
				templateUrl: 'scripts/authentication/login.html',
				controller: 'LoginCtrl as loginCtrl'
			}
		}
	});
});