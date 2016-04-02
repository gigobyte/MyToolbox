angular.module('mytoolboxApp', ['ui.router', 'restangular', 'seAuthentication', 'seEvents', 'pascalprecht.translate', 'ngAnimate', 'anim-in-out']).config(function($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, RestangularProvider) {
	function configureRouting() {
		$urlRouterProvider.when('', '/');
		$urlRouterProvider.otherwise(function() {
			// $injector.get("$log").error("viblastCustomerPortalApp: unknown location: ", $location);
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
