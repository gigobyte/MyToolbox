angular.module('mytoolboxApp').controller('UserCtrl', function (AuthenticationService, ToolService, UserService, $state) {
	'use strict';

	var controller = this;

	function initState() {
		AuthenticationService.getLoggedUser().then(function(getLoggedUserRes) {
			UserService.getUser($state.params.username).then(function(getUserRes) {
				controller.user = getUserRes;

				if(getLoggedUserRes && getLoggedUserRes._id === getUserRes._id) {
					controller.sessionUser = true;
				}

				$.each(controller.user.lists, function() {
					_.map(this.entries, function(e) {
						ToolService.getTool(e.tool).then(function(res) {
							e.tool = res;
							e.tool.image = '../../images/tools/' + e.tool.image;

							return e;
						})
					});
				});

				if(controller.sessionUser && !controller.user.firstname) {
					$('#fillInfoModal').modal('show');
				}
			});
		});
	}

	function attachMethods() {
		controller.goToSettings = function() {
			//This exists because I am dumb and forgot to use the angular bootstrap
			$('#fillInfoModal').modal('hide');
			$state.go('home.user.settings', null, {reload: true});
		}
	}

	initState();
	attachMethods();
});