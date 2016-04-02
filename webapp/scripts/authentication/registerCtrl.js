angular.module('mytoolboxApp').controller('RegisterCtrl', function ($state, AccountUsersService) {
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
			AccountUsersService.register(controller.user).then(function() {
				$state.go('home.first', null, {reload: true});
			});
		}
	}

	initState();
	attachMethods();
});