angular.module('mytoolboxApp').controller('ToolsCtrl', function (ToolsService) {
	'use strict';

	var controller = this;

	function initState() {
		ToolsService.getTools().then(function(res) {
			controller.tools = res;
		});
	}

	function attachMethods() {
	}

	initState();
	attachMethods();
});