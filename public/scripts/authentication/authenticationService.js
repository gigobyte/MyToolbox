angular.module('mytoolboxApp').service('AuthenticationService', function (Restangular) {
	'use strict';

	var service = this;

	var ENDPOINTS = {
		LOGIN: 'login',
		REGISTER: 'register'
	};

	service.login = function(credentials) {
		return Restangular.oneUrl(ENDPOINTS.LOGIN).customPOST(credentials);
	}
});