angular.module('mytoolboxApp').controller('HomeCtrl', function (AuthenticationService) {
	'use strict';

	var controller = this;

	function initState() {
		controller.isLoggedIn = false;
	}

	function attachMethods() {
	}

	initState();
	attachMethods();
});