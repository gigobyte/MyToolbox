angular.module('mytoolboxApp').config(function($translateProvider) {
	'use strict';
	$translateProvider.translations('en', {
		'button.addToList': 'Add to list',
		'button.add': 'Add',
		'modal.label.addTo': 'Add to',
		'modal.label.rating': 'Rating',
		'modal.label.review': 'Review',
		'modal.accordion.label': 'I want to write one!'

	});

	$translateProvider.translations('bg', {
	});

	$translateProvider.preferredLanguage('en');
	$translateProvider.useSanitizeValueStrategy('sanitize');
});