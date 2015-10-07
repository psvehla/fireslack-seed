angular.module('angularfireSlackApp').controller('AuthCtrl', function(Auth, $state) {
	
	var authCtrl = this;
	
	authCtrl.user = {
		email: '',
		password: ''
	};
	
	authCtrl.login = function() {
		alert(authCtrl.user.email);
		alert(authCtrl.user.password);
		Auth.$authWithPassword(authCtrl.user).then(function(auth) {
			$state.go('home');
		}, function(error) {
			alert(error.code);
			authCtrl.error = error;
		});
	};
	
	authCtrl.register = function() {
		Auth.$createUser(authCtrl.user).then(function(user) {
			authCtrl.login();
		}, function(error) {
			authCtrl.error = error;
		});
	};
});