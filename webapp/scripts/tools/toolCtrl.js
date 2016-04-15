angular.module('mytoolboxApp').controller('ToolCtrl', function ($state, $scope, ToolsService, AccountUsersService) {
	'use strict';

	var controller = this;

	function initState() {
		AccountUsersService.getLoggedUser().then(function(getLoggedUserRes) {
			ToolsService.getTool($state.params.id).then(function(getToolRes) {
				controller.tool = getToolRes;
				controller.tool.image = '../../images/tools/' + getToolRes.image;

				controller.addedTool = {
					tool: controller.tool._id
				};

				controller.userLists = [];

				_.map(getLoggedUserRes.lists, function(list) {
						controller.userLists.push(list.name)
				});
			});	
		});
	}

	function attachMethods() {
		controller.addTool = function() {
			ToolsService.addTool(controller.addedTool).then(function(res) {
				console.log('done');
			});
		}
	}

	initState();
	attachMethods();
});