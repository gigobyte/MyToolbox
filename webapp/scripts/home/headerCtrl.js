angular.module('mytoolboxApp').controller('HeaderCtrl', function () {
	'use strict';

	var controller = this;

	function initState() {
		SeAuthenticationService.getLoggedMember().then(function(res) {
			controller.user = res;
		});
	}

	function attachMethods() {
	}

	initState();
	attachMethods();
});