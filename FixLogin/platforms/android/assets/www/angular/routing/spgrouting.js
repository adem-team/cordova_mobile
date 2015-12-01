'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
	$routeProvider.when('/spg',
	{
		templateUrl	: 'angular/partial/spg/dashspg.html',
		controller 	: 'SpgController',
		resolve: 
		{
            auth: function ($q, authService,$location) 
            {
                var userInfo = authService.getUserInfo();
                if (userInfo) 
                {
                    return $q.when(userInfo);
                } 
                else 
                {
                    $location.path('/');
                }
            }
        }
	});
    $routeProvider.when('/salesman/newcustomer',
    {
        templateUrl : 'angular/partial/spg/newcustomer.html',
        controller  : 'SpgController',
        resolve: 
        {
            auth: function ($q, authService,$location) 
            {
                var userInfo = authService.getUserInfo();
                if (userInfo) 
                {
                    return $q.when(userInfo);
                } 
                else 
                {
                    $location.path('/');
                }
            }
        }
    });
    $routeProvider.when('/spg/sellingoutmaintain',
    {
        templateUrl : 'angular/partial/spg/sellingoutmaintain.html',
        controller  : 'SpgController',
        resolve: 
        {
            auth: function ($q, authService,$location) 
            {
                var userInfo = authService.getUserInfo();
                if (userInfo) 
                {
                    return $q.when(userInfo);
                } 
                else 
                {
                    $location.path('/');
                }
            }
        }
    });	
}]);
