angular.module('mytoolboxApp').controller('HeaderCtrl', function ($state, AuthenticationService) {
	'use strict';

	var controller = this;

	function initState() {
		AuthenticationService.getLoggedUser().then(function(res) {
			controller.user = res;
		});		
	}

	function attachMethods() {
		controller.logout = function() {
			AuthenticationService.logout().then(function() {
				$state.go('home.first', null, {reload: true});
			});
		}
	}

	initState();
	attachMethods();
});