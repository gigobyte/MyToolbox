angular.module('mytoolboxApp').controller('ProfileCtrl', function (AccountUsersService, ToolService) {
	'use strict';

	var controller = this;

	function initState() {
		AccountUsersService.getLoggedUser().then(function(res) {
			controller.user = res;

			console.log(res);

			controller.user.knownTools = controller.user.lists[0];

			_.map(controller.user.knownTools.entries, function(e) {
				ToolService.getTool(e.tool).then(function(res) {
					e.tool = res;
					e.tool.image = '../../images/tools/' + e.tool.image;

					return e;
				})
			})
		});
	}

	function attachMethods() {
	}

	initState();
	attachMethods();
});