angular.module('mytoolboxApp').controller('ToolCtrl', function ($state, $scope, ToolService, AccountUsersService, NotificationService) {
	'use strict';

	var controller = this;

	function initState() {
		var toolId = $state.params.name;

		AccountUsersService.getLoggedUser().then(function(getLoggedUserRes) {
			ToolService.getTool(toolId).then(function(getToolRes) {
				function isToolAdded(getLoggedUserRes) {
					var added;

					$.each(getLoggedUserRes.lists, function() {
						var list = this;
						$.each(list.entries, function() {
							if (this.tool === toolId) {
								added = {};
								added.entry = this;
								added.list = list.id;
							}
						});
					});

					return added;
				}
				controller.tool = getToolRes;
				controller.tool.image = '../../images/tools/' + getToolRes.image;
				controller.loggedUser = getLoggedUserRes;

				if(controller.loggedUser) {
					controller.userLists = [];

					controller.addedTool = {
						tool: controller.tool._id
					};

					_.map(controller.loggedUser.lists, function(list, i) {
						controller.userLists.push({name: list.name, index: i});
					});

					controller.alreadyAddedTool = isToolAdded(controller.loggedUser);
					
					if(controller.alreadyAddedTool) {
						controller.updatedTool = {
							tool: controller.alreadyAddedTool.entry.tool,
							list: controller.userLists[controller.alreadyAddedTool.list],
							rating: controller.alreadyAddedTool.entry.rating,
							review: controller.alreadyAddedTool.entry.review
						};
					}
				}
			});
		});
	}

	function attachMethods() {
		function showResponse(res, modalToHide) {
			NotificationService.show(res);
			$(modalToHide).modal('hide');
		}

		controller.addTool = function() {
			ToolService.addTool(controller.addedTool).then(
				function(res) {
					showResponse(res, '#addToListModal');
				},

				function(res) {
					showResponse(res.data, '#addToListModal');
				}
			);
		}

		controller.updateTool = function() {
			ToolService.updateTool(controller.updatedTool).then(
				function(res) {
					showResponse(res, '#editEntryModal');
				},

				function(res) {
					showResponse(res.data, '#editEntryModal');
				}
			)
		}
	}

	initState();
	attachMethods();
});