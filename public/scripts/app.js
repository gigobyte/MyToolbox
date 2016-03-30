angular.module('mytoolboxApp', ['ui.router', 'restangular', 'LocalStorageModule']).config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
});