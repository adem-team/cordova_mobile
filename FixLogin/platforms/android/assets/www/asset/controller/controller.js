var app = angular.module("sampleApp", ['ngRoute']);
app.config(function($routeProvider)
{
	$routeProvider.when('/',
	{
		templateUrl:'asset/partial/login.html'

	});
	$routeProvider.when('/dashboard',
	{
		resolve:
		{
			"check":function($location,$rootScope)
			{
				if(!$rootScope.loggedIn)
					{
						$location.path('/');
					}

			}
		},
		templateUrl:'asset/partial/dashboard.html'

	});
	$routeProvider.otherwise(
	{
		redirectTo:'/'
	});

});

app.controller('loginCtrl', function($scope, $location, $rootScope)
{
	$scope.submit = function(user)
	{
		$scope.user = angular.copy(user);
		var username = $scope.user.username;
		var password = $scope.user.passwords;

	

		if(username == 'admin' && password == 'admin')
		{
			$rootScope.loggedIn = true;
			$location.path('/dashboard');
		}
		else
		{
			alert('Wrong Stuff');
		}
	};
});