angular.module('mytoolboxApp', ['ui.router', 'restangular', 'pascalprecht.translate', 'ngAnimate', 'ngSanitize', 'ngMaterial', 'ui.select', 'ui.bootstrap']).config(function($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, RestangularProvider) {
	function configureRouting() {
		$urlRouterProvider.when('', '/');
		$urlRouterProvider.otherwise(function() {
			return '/404';
		});

		$locationProvider.hashPrefix('!');

		RestangularProvider.setBaseUrl('/api');
		RestangularProvider.setRestangularFields({
			id: '_id'
		});
	}

	function configureSessionCookies() {
		$httpProvider.defaults.xsrfCookieName = "csrftoken";
		$httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";
	}

	configureRouting();
	configureSessionCookies();
});