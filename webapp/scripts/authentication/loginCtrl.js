angular.module('mytoolboxApp').controller('LoginCtrl', function ($state, SeAuthenticationService) {
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
		controller.login = function() {
			
		}
	}

	initState();
	attachMethods();
});