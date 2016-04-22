angular.module('mytoolboxApp').config(function($stateProvider) {
	'use strict';

	$stateProvider
	.state('home.user', {
		url: '/user/:username',
		views: {
			'content@home': {
				templateUrl: 'scripts/user/user.html',
				controller: 'UserCtrl as userCtrl'
			}
		}
	})
	.state('home.user.settings', {
		url: '/settings',
		views: {
			'content@home': {
				templateUrl: 'scripts/user/settings/settings.html',
				controller: 'UserSettingsCtrl as userSettingsCtrl'
			}
		}
	});
});
