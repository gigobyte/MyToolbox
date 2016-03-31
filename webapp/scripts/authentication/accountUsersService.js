angular.module('mytoolboxApp').service('AccountUsersService', function(Restangular) {
	'use strict';
	var REST = {
		ACCOUNT: 'account',
		USERS: 'users',
		AUTHENTICATE: 'authenticate',
		REGISTER: 'register'
	};

	var service = this;

	function attachMethods() {
		service.register = function(user) {
			return Restangular.all(REST.AUTHENTICATE).all(REST.REGISTER).post(user);
		};
		service.updateUser = function(user) {
			return user.put();
		};
		service.deleteUser = function(user) {
			return user.remove();
		};
		service.getUser = function(company, userId) {
			return company.one(REST.USERS, userId).get();
		};
	}

	attachMethods();
});
