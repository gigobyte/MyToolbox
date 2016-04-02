angular.module('mytoolboxApp').config(function($stateProvider) {
	'use strict';

	$stateProvider
	.state('home', {
		url: '',
		abstract: true,
		views: {
			'': {
				templateUrl: 'scripts/home/frame.html'
			},
			'header@home': {
				templateUrl: 'scripts/home/header.html',
				controller: 'HeaderCtrl as headerCtrl'
			}
		}
	})
	.state('home.first', {
		url: '/',
		views: {
			'content@home': {
				templateUrl: 'scripts/home/home.html',
				controller: 'HomeCtrl as homeCtrl'
			}
		}
	})
});
