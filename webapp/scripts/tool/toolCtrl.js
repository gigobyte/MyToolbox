angular.module('mytoolboxApp').controller('ToolCtrl', function ($state, $scope, ToolService, AccountUsersService, NotificationService) {
	'use strict';

	var controller = this;

	function initState() {
		AccountUsersService.getLoggedUser().then(function(getLoggedUserRes) {
			ToolService.getTool($state.params.id).then(function(getToolRes) {
				controller.tool = getToolRes;
				controller.tool.image = '../../images/tools/' + getToolRes.image;

				controller.addedTool = {
					tool: controller.tool._id
				};

				controller.userLists = [];

				_.map(getLoggedUserRes.lists, function(list, i) {
					controller.userLists.push({name: list.name, index: i});
				});
			});	
		});
	}

	function attachMethods() {
		controller.addTool = function() {
			console.log(controller.addedTool);

			ToolService.addTool(controller.addedTool).then(function(res) {
				console.log(res);
				NotificationService.show(res);
			});
		}
	}

	initState();
	attachMethods();
});