'use strict';
testAppModule.config(['$routeProvider', function($routeProvider)
{
	$routeProvider.when('/',
	{
		templateUrl : 'angular/test/partial/home.html',
		controller	: 'TestController',
	});	
}]);
