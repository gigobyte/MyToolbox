angular.module('mytoolboxApp').config(function($translateProvider) {
	'use strict';
	$translateProvider.translations('en', {
		'nav.login': 'Login',
		'nav.register': 'Register',
		'nav.tools': 'Tools',
		'nav.lists': 'Lists',
		'nav.users': 'Users',
		'nav.profile.profile': 'Profile',
		'nav.profile.myTools': 'My Tools',
		'nav.profile.myLists': 'My Lists',
		'nav.profile.settings': 'Settings',
		'nav.profile.logout': 'Logout'
	});

	$translateProvider.translations('bg', {
		'nav.login': 'Влез',
		'nav.register': 'Регистрация',
		'nav.tools': 'Инструменти',
		'nav.lists': 'Списъци',
		'nav.users': 'Потребители',
		'nav.profile.profile': 'Профил',
		'nav.profile.myTools': 'Мои инструменти',
		'nav.profile.myLists': 'Мои списъци',
		'nav.profile.settings': 'Настройки',
		'nav.profile.logout': 'Излез'
	});

	$translateProvider.preferredLanguage('en');
	$translateProvider.useSanitizeValueStrategy('sanitize');
});