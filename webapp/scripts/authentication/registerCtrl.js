angular.module('mytoolboxApp').controller('RegisterCtrl', function ($state, $element, AccountUsersService, NotificationService) {
	'use strict';

	var controller = this;

	function navigateToHome() {
		$state.go('home.first', null, {reload: true});
	}

	function initState() {
		controller.user = {};
	}

	function attachMethods() {
		controller.register = function() {
			AccountUsersService.register(controller.user).then(
				function(res) {
					$state.go('home.first', null, {reload: true});
				},

				function() {
					NotificationService.show($element, 'notification.userExists');
				}
			);
		}
	}

	initState();
	attachMethods();
});