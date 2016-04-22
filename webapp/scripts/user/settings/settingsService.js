angular.module('mytoolboxApp').service('UserSettingsService', function(Restangular) {
	'use strict';
	var REST = {
		USER: 'user',
		UPDATE: 'update'
	};

	var service = this;

	function attachMethods() {
		service.updateProfile = function(user) {
			return Restangular.all(REST.USER).post(user);
		}
	}

	attachMethods();
});
