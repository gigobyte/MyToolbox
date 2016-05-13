angular.module('mytoolboxApp').controller('HeaderCtrl', function ($state, $scope, AuthenticationService, ToolsService) {
	'use strict';

	var controller = this;

	function initState() {
		AuthenticationService.getLoggedUser().then(function(getLoggedUserRes) {
			ToolsService.getTools().then(function(getToolsRes) {
				controller.tools = getToolsRes;
				controller.user = getLoggedUserRes;
			});
		});

		$scope.$watch('headerCtrl.selectedTool', function(value) {
			if(value) {
				$state.go('home.tool', {name: value.indexName});
				controller.selectedTool = null;
			}
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