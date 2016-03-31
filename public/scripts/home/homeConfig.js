angular.module('mytoolboxApp').config(function($stateProvider) {
	'use strict';

	$stateProvider
	.state('home', {
		url: '/',
	$stateProvider
	.state('home', {
		url: '',
		abstract: true,
		views: {
			'': {
				templateUrl: 'scripts/home/frame.html'
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
	})
	.state('home.first', {
		url: '/',
		views: {
			'content@home': {
				templateUrl: null,
				controller: null
			}
		}
	})
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
	});
});