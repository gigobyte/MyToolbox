angular.module('mytoolboxApp').controller('UserCtrl', function (AccountUsersService, ToolService, UserService, $state) {
	'use strict';

	var controller = this;

	function initState() {
		AccountUsersService.getLoggedUser().then(function(getLoggedUserRes) {
			UserService.getUser($state.params.username).then(function(getUserRes) {
				if(getLoggedUserRes && getLoggedUserRes._id === getUserRes._id) {
					controller.sessionUser = true;
				}

				controller.user = getUserRes;
				controller.user.knownTools = controller.user.lists[0];

				_.map(controller.user.knownTools.entries, function(e) {
					ToolService.getTool(e.tool).then(function(res) {
						e.tool = res;
						e.tool.image = '../../images/tools/' + e.tool.image;

						return e;
					})
				});
			});
		});
	}

	function attachMethods() {
	}

	initState();
	attachMethods();
});