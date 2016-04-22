angular.module('mytoolboxApp').config(function($translateProvider) {
	'use strict';
	$translateProvider.translations('en', {
		'modal.body.greeting': 'Your profile seems quite empty :(',
		'modal.body.addInfo': 'You can add information about yourself from',
		'modal.body.link': 'here',
		'modal.body.addTool': 'You can check out some tools'
	});

	$translateProvider.translations('bg', {
	});

	$translateProvider.preferredLanguage('en');
	$translateProvider.useSanitizeValueStrategy('sanitize');
});