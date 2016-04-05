angular.module('mytoolboxApp').service('ToolsService', function(Restangular) {
	'use strict';
	var REST = {
		TOOLS: 'tools',
		TOOL: 'tool',
		ADD: 'add'
	};

	var service = this;

	function attachMethods() {
		service.getTools = function() {
			return Restangular.oneUrl(REST.TOOLS).get();
		}

		service.getTool = function(tool) {
			console.log(tool);
			return Restangular.all(REST.TOOL).customGET('', {'tool': tool});
		}

		service.addTool = function(tool) {
			return Restangular.all(REST.TOOL).all(REST.ADD).post(tool);
		}
	}

	attachMethods();
});
