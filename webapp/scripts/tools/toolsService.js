angular.module('mytoolboxApp').service('ToolsService', function(Restangular) {
	'use strict';
	var REST = {
		TOOLS: 'tools',
		TOOL: 'tool'
	};

	var service = this;

	function attachMethods() {
		service.getTools = function() {
			return Restangular.oneUrl(REST.TOOLS).get();
		}

		service.getTool = function(tool) {
			return Restangular.all(REST.TOOL).customGET('', {'tool': tool});
		}
	}

	attachMethods();
});
