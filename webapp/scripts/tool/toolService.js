angular.module('mytoolboxApp').service('ToolService', function(Restangular) {
	'use strict';
	var REST = {
		TOOL: 'tool',
		ADD: 'add',
		UPDATE: 'update'
	};

	var service = this;

	function attachMethods() {
		service.getTool = function(tool) {
			return Restangular.all(REST.TOOL).customGET('', {'tool': tool});
		}

		service.addTool = function(tool) {
			return Restangular.all(REST.TOOL).all(REST.ADD).post(tool);
		}

		service.updateTool = function(tool) {
			return Restangular.all(REST.TOOL).all(REST.UPDATE).post(tool);
		}		
	}

	attachMethods();
});
