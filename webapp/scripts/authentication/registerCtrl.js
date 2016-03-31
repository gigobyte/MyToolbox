angular.module('mytoolboxApp').controller('RegisterCtrl', function ($state, SeAuthenticationService, AccountUsersService) {
	'use strict';

	var controller = this;

	function navigateToHome() {
		$state.go('home.first', null, {reload: true});
	}

	function initState() {
		controller.user = {};

		//return to home is user is logged
		SeAuthenticationService.getLoggedMember().then(navigateToHome);
	}

	function attachMethods() {
		controller.register = function() {
			AccountUsersService.register(controller.user).then(function() {
				$state.go('home.first', null, {reload: true});
			});
		}
	}

	initState();
	attachMethods();
});