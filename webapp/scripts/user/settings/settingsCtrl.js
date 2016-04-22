angular.module('mytoolboxApp').controller('UserSettingsCtrl', function (UserSettingsService, AuthenticationService, $state) {
	'use strict';

	var controller = this;

	function initState() {
		AuthenticationService.getLoggedUser().then(function(res) {
			if(!res) {
				$state.go('home.first', null, {reload: true});
			}
			controller.user = res;
		});
	}

	function attachMethods() {
	}

	initState();
	attachMethods();
});