angular.module("mytoolboxApp").config(function($stateProvider) {
	'use strict';

	$stateProvider.state('home', {
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
	});
});