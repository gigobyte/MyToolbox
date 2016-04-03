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
		'header.login': 'Влез',
		'header.register': 'Регистрация',

		'placeholder.username': 'Потребителско име',
		'placeholder.password': 'Парола',
		'placeholder.passwordRepeat': 'Повтори паролата',
		'placeholder.email': 'Email',

		'button.forgotPassword': 'Забравена парола?',

		'notification.userExists': 'Потребителят вече съществува.',
		'notification.registerSuccess': 'Регистрацията е успешна!'
	});

	$translateProvider.preferredLanguage('en');
	$translateProvider.useSanitizeValueStrategy('sanitize');
});