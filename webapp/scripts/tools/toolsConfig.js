angular.module('mytoolboxApp').config(function($stateProvider) {
	'use strict';

	$stateProvider
	.state('home.tools', {
		url: '/tools',
		views: {
			'content@home': {
				templateUrl: 'scripts/tools/tools.html',
				controller: 'ToolsCtrl as toolsCtrl'
			}
		}
	})
	.state('home.tool', {
		url: '/tool/:name',
		views: {
			'content@home': {
				
			}
		}
	});
});
