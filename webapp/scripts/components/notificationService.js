angular.module('mytoolboxApp').service('NotificationService', function($mdToast, $filter) {
	'use strict';

	var service = this;

	var POSITION = 'top right';

	function attachMethods() {
		service.show = function(msg, next) {
			$mdToast.show(
				$mdToast.simple().textContent(msg).position(POSITION).hideDelay(2000)
			).then(next);
		}
	}

	attachMethods();
});
