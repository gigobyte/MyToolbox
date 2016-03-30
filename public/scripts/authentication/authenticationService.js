angular.module('mytoolboxApp').service('AuthenticationService', function (Restangular) {
	'use strict';

	var service = this;

	var ENDPOINTS = {
		LOGIN: 'login',
		REGISTER: 'register'
	};

	service.getLoggedUser = function() {
		return {
			username: 'gigobyte',
			email: 's.iliev3@gmail.com',
			githubLink: 'https://github.com/gigobyte'
		};
	}
});