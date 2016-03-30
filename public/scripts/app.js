angular.module('mytoolboxApp', ['ui.router', 'restangular', 'LocalStorageModule']).config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
	$urlRouterProvider.otherwise('/');

	RestangularProvider.setBaseUrl("/api");
	RestangularProvider.setRestangularFields({
		id: "_id"
	});
});