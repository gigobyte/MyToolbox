angular.module('mytoolboxApp').controller('ToolCtrl', function ($state, $scope, $mdMedia, $mdDialog, ToolsService) {
	'use strict';

	var controller = this;

	function initState() {
		ToolsService.getTool($state.params.name).then(function(res) {
			controller.tool = res;
			controller.tool.image = '../../images/tools/' + res.image;

			controller.addedTool = {};

			controller.dummyList = [
				{name: 'Learned'},
				{name: 'Want to learn'}
			]
		});
	}

	function attachMethods() {
		controller.addToList = function(ev) {

		}
	}

	initState();
	attachMethods();
});