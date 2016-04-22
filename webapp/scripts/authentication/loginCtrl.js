angular.module('mytoolboxApp').controller('LoginCtrl', function ($state, AuthenticationService, NotificationService) {
	'use strict';

	var controller = this;

	function navigateToHome() {
		$state.go('home.first', null, {reload: true});
	}

	function initState() {
		controller.user = {};
	}

	function attachMethods() {
		controller.login = function() {
			AuthenticationService.login(controller.user).then(
				function() {
					$state.go('home.first', null, {reload: true});
				},

				function(res) {
					NotificationService.show(res.data);
				}
			);
		}
	}

	initState();
	attachMethods();
});