angular.module('mytoolboxApp').config(function($stateProvider) {
	'use strict';

	$stateProvider
	.state('home.tool', {
		url: '/tool/:name',
		views: {
			'content@home': {
				templateUrl: 'scripts/tool/tool.html',
				controller: 'ToolCtrl as toolCtrl'
			}
		}
	});
});
