angular.module('mytoolboxApp').controller('LoginCtrl', function ($state, AccountUsersService, NotificationService) {
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
			AccountUsersService.login(controller.user).then(
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