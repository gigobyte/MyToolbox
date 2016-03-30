angular.module("mytoolboxApp").config(function($stateProvider) {
	'use strict';

	$stateProvider.state('home', {
		url: '/',
		views: {
			'': {
				templateUrl: 'scripts/home/home.html'
			},
			'header@home': {
				templateUrl: 'scripts/home/header.html'
			}
		}
	});
});