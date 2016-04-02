angular.module('mytoolboxApp').controller('ToolsCtrl', function (ToolsService) {
	'use strict';

	var controller = this;

	function initState() {
		ToolsService.getTools().then(function(res) {
			controller.tools = _.map(res, function(e) {
				e.image = '../../images/tools/' + e.image;

				return e;
			});
		});
	}

	function attachMethods() {
	}

	initState();
	attachMethods();
});