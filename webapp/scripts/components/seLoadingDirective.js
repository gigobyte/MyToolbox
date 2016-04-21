angular.module('mytoolboxApp').directive('seLoading', function($parse, $timeout) {
	'use strict';
	var CLASS_NAME = 'se-loading';
	var TIMEOUT = 0;
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			var promise;

			function hideWaiter() {
				if (promise) {
					$timeout.cancel(promise);
					promise = null;
				}

				element.removeClass(CLASS_NAME);
			}
			function showWaiter() {
				hideWaiter();
				promise = $timeout(function() {
					element.addClass(CLASS_NAME);
				}, TIMEOUT);
			}
			scope.$watch(attrs.seLoading, function(value) {
				if (value) {
					hideWaiter();
				} else {
					showWaiter();
				}
			});
			scope.$on('$destroy', function() {
				hideWaiter();
			});
		}
	};
});
