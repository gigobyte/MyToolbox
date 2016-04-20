angular.module('mytoolboxApp').config(function($translateProvider) {
	'use strict';
	$translateProvider.translations('en', {
		'button.addToList': 'Add to list',
		'button.editEntry': 'Edit entry',

		'modal.addToList.button.add': 'Add',
		'modal.addToList.label.addTo': 'Add to',
		'modal.addToList.label.rating': 'Rating',
		'modal.addToList.label.review': 'Review',
		'modal.addToList.accordion.label': 'I want to write one!',

		'modal.editEntry.header': 'Editing',
		'modal.editEntry.button.update': 'Update',
		'modal.editEntry.label.changeList': 'Change list',
		'modal.editEntry.label.rating': 'Rating',
		'modal.editEntry.label.review': 'Review',
		'modal.editEntry.accordion.label': 'I want to update it',
	});

	$translateProvider.translations('bg', {
	});

	$translateProvider.preferredLanguage('en');
	$translateProvider.useSanitizeValueStrategy('sanitize');
});