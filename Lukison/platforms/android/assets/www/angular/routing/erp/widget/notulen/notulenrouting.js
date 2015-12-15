'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
	$routeProvider.when('/erp/widget/list/notulen',
	{
		templateUrl	: 'angular/partial/erp/widget/notulen/listnotulen.html',
		controller 	: 'ListNotulenController',
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
    $routeProvider.when('/erp/widget/new/notulen',
    {
        templateUrl : 'angular/partial/erp/widget/notulen/newnotulen.html',
        controller  : 'NewNotulenController',
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
    $routeProvider.when('/erp/widget/edit/notulen/:idnotulen',
    {
        templateUrl : 'angular/partial/erp/widget/notulen/editnotulen.html',
        controller  : 'EditNotulenController',
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
    $routeProvider.when('/erp/widget/detail/notulen/:idnotulen',
    {
        templateUrl : 'angular/partial/erp/widget/notulen/detailnotulen.html',
        controller  : 'DetailNotulenController',
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
