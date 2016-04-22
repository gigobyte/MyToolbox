angular.module('mytoolboxApp').controller('RegisterCtrl', function ($state, AuthenticationService, NotificationService) {
	'use strict';

	var controller = this;

	function initState() {
		controller.user = {};
	}

	function attachMethods() {
		controller.register = function() {
			if (controller.user.password !== controller.user.$$passwordRepeat) {
				NotificationService.show('Passwords do not match');
			} else {
				AuthenticationService.register(controller.user).then(
					function(res) {
						NotificationService.show(res);
						$state.go('home.authenticate.login', null, {reload: true});
					},

					function(res) {
						NotificationService.show(res.data);
					}
				);
			}
		}
	}

	initState();
	attachMethods();
});