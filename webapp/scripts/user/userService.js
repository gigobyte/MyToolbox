angular.module('mytoolboxApp').service('UserService', function(Restangular) {
	'use strict';
	var REST = {
		USER: 'user'
	};

	var service = this;

	function attachMethods() {
		service.getUser = function(username) {
			return Restangular.all(REST.USER).customGET('', {'username': username});
		}
	}

	attachMethods();
});
