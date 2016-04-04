angular.module('mytoolboxApp').config(function($stateProvider) {
	'use strict';

	$stateProvider
	.state('home.profile', {
		url: '/profile',
		views: {
			'content@home': {
				templateUrl: 'scripts/profile/profile.html',
				controller: 'ProfileCtrl as profileCtrl'
			}
		}
	})
});
