angular.module('mytoolboxApp').config(function($translateProvider) {
	'use strict';
	$translateProvider.translations('en', {
		'header.newest': 'Newest'
	});

	$translateProvider.translations('bg', {
		'header.newest': 'Най-нови'
	});

	$translateProvider.preferredLanguage('en');
	$translateProvider.useSanitizeValueStrategy('sanitize');
});