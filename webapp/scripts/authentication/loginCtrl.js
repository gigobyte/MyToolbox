angular.module('mytoolboxApp').controller('LoginCtrl', function ($state) {
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
			
		}
	}

	initState();
	attachMethods();
});