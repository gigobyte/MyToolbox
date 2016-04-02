angular.module('mytoolboxApp').config(function($translateProvider) {
	'use strict';
	$translateProvider.translations('en', {
		'header.login': 'Login',
		'header.register': 'Register',

		'placeholder.username': 'Username',
		'placeholder.password': 'Password',
		'placeholder.passwordRepeat': 'Password again',
		'placeholder.email': 'Email',

		'button.forgotPassword': 'Forgot Password?',

		'notification.userExists': 'User already exists.',
		'notification.registerSuccess': 'Registration succesful!'
	});

	$translateProvider.translations('bg', {
		'nav.login': 'Влез'
	});

	$translateProvider.preferredLanguage('en');
	$translateProvider.useSanitizeValueStrategy('sanitize');
});