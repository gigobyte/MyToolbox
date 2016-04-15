angular.module('mytoolboxApp').config(function($translateProvider) {
	'use strict';
	$translateProvider.translations('en', {
		'header.newest': 'Newest',
		'button.addToList': 'Add to list',
		'button.add': 'Add',
		'modal.label.addTo': 'Add to',
		'modal.label.rating': 'Rating',
		'modal.label.review': 'Review',
		'modal.accordion.label': 'I want to write one!'

	});

	$translateProvider.translations('bg', {
		'header.newest': 'Най-нови'
	});

	$translateProvider.preferredLanguage('en');
	$translateProvider.useSanitizeValueStrategy('sanitize');
});