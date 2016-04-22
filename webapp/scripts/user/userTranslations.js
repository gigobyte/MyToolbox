angular.module('mytoolboxApp').config(function($translateProvider) {
	'use strict';
	$translateProvider.translations('en', {
		'modal.body': 'Your profile seems quite empty :( You can add information about yourself from',
		'modal.body.link': 'here'
	});

	$translateProvider.translations('bg', {
	});

	$translateProvider.preferredLanguage('en');
	$translateProvider.useSanitizeValueStrategy('sanitize');
});