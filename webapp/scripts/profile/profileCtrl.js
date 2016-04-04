angular.module('mytoolboxApp').controller('ProfileCtrl', function (AccountUsersService) {
	'use strict';

	var controller = this;

	function initState() {
		AccountUsersService.getLoggedUser().then(function(res) {
			controller.user = res;
			console.log(res);
		});
	}

	function attachMethods() {
	}

	initState();
	attachMethods();
});