angular.module('mytoolboxApp').service('NotificationService', function($mdToast, $filter) {
	'use strict';

	var service = this;

	var POSITION = 'top right';

	function attachMethods() {
		service.show = function(element, msg, next) {
			var msgText = $filter('translate')(msg);
			
			$mdToast.show(
				$mdToast.simple().textContent(msgText).position(POSITION).hideDelay(2000).parent(element)
			).then(next);
		}
	}

	attachMethods();
});
