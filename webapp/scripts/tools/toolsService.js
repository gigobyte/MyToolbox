angular.module('mytoolboxApp').service('ToolsService', function(Restangular) {
	'use strict';
	var REST = {
		TOOLS: 'tools'
	};

	var service = this;

	function attachMethods() {
		service.getTools = function() {
			return Restangular.oneUrl(REST.TOOLS).get();
		}
	}

	attachMethods();
});
