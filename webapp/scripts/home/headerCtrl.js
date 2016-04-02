angular.module('mytoolboxApp').controller('HeaderCtrl', function ($state, AccountUsersService) {
	'use strict';

	var controller = this;

	function initState() {
		AccountUsersService.getLoggedUser().then(function(res) {
			controller.user = res;
		});		
	}

	function attachMethods() {
		controller.logout = function() {
			AccountUsersService.logout().then(function() {
				$state.go('home.first', null, {reload: true});
			});
		}
	}

	initState();
	attachMethods();
});