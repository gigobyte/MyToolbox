angular.module('mytoolboxApp').service('AccountUsersService', function(Restangular) {
	'use strict';
	var REST = {
		AUTHENTICATE: 'authenticate',
		REGISTER: 'register',
		LOGIN: 'login',
		LOGOUT: 'logout',
		CURRENTUSER: 'currentuser'
	};

	var service = this;

	function attachMethods() {
		service.login = function(user) {
			return Restangular.all(REST.AUTHENTICATE).all(REST.LOGIN).post(user);
		}

		service.register = function(user) {
			return Restangular.all(REST.AUTHENTICATE).all(REST.REGISTER).post(user);
		};

		service.logout = function() {
			return Restangular.oneUrl(REST.AUTHENTICATE).oneUrl(REST.LOGOUT).get();
		}

		service.getLoggedUser = function() {
			return Restangular.oneUrl(REST.AUTHENTICATE).oneUrl(REST.CURRENTUSER).get();
		}
	}

	attachMethods();
});
