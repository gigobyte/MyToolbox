angular.module('mytoolboxApp').controller('LoginCtrl', function ($state, AccountUsersService) {
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
			AccountUsersService.login(controller.user).then(function() {
				$state.go('home.first', null, {reload: true});
			});
		}
	}

	initState();
	attachMethods();
});