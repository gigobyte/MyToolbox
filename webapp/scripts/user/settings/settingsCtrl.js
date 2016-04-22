angular.module('mytoolboxApp').controller('UserSettingsCtrl', function (UserSettingsService, AuthenticationService, $state, NotificationService) {
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
		controller.updateProfile = function() {
			UserSettingsService.updateProfile(controller.user).then(function(res) {
				NotificationService.show(res);
				$state.go('home.user', null, {reload: true});
			});
		}
	}

	initState();
	attachMethods();
});