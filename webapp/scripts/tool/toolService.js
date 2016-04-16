angular.module('mytoolboxApp').service('ToolService', function(Restangular) {
	'use strict';
	var REST = {
		TOOL: 'tool',
		ADD: 'add'
	};

	var service = this;

	function attachMethods() {
		service.getTool = function(tool) {
			return Restangular.all(REST.TOOL).customGET('', {'tool': tool});
		}

		service.addTool = function(tool) {
			return Restangular.all(REST.TOOL).all(REST.ADD).post(tool);
		}
	}

	attachMethods();
});
