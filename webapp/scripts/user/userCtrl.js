angular.module('mytoolboxApp').controller('UserCtrl', function (AuthenticationService, ToolService, UserService, $state, GLOBVARS) {
	'use strict';

	var controller = this;

	function initState() {
		function triggerNotEnoughInfoModal(user) {
			if(!user) {
				return;
			}

			var totalListEntries = 0;

			$.each(user.lists, function() {
				totalListEntries += this.entries.length;
			});

			if (user && (!controller.user.firstname || totalListEntries === 0)) {
					$('#fillInfoModal').modal('show');
					GLOBVARS.has_seen_profile_warning = true;
			}
		}

		AuthenticationService.getLoggedUser().then(function(getLoggedUserRes) {
			UserService.getUser($state.params.username).then(function(getUserRes) {
				controller.user = getUserRes;

				if (getLoggedUserRes && getLoggedUserRes._id === getUserRes._id) {
					controller.sessionUser = true;

					if(!GLOBVARS.has_seen_profile_warning) {
						triggerNotEnoughInfoModal(controller.user);
					}
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
			});
		});
	}

	function attachMethods() {
		controller.goToSettings = function() {
			//This exists because I am dumb and forgot to use the angular bootstrap
			$('#fillInfoModal').modal('hide');
			$state.go('home.user.settings', null, {reload: true});
		}

		controller.goToTools = function() {
			//This exists because I am dumb and forgot to use the angular bootstrap
			$('#fillInfoModal').modal('hide');
			$state.go('home.tools', null, {reload: true});			
		}
	}

	initState();
	attachMethods();
});