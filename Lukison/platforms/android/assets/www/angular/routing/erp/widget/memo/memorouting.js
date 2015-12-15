'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
	$routeProvider.when('/erp/widget/list/memo',
	{
		templateUrl	: 'angular/partial/erp/widget/memo/listmemo.html',
		controller 	: 'ListMemoController',
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
    $routeProvider.when('/erp/widget/new/memo',
    {
        templateUrl : 'angular/partial/erp/widget/memo/newmemo.html',
        controller  : 'NewMemoController',
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
    $routeProvider.when('/erp/widget/edit/memo/:idmemo',
    {
        templateUrl : 'angular/partial/erp/widget/memo/editmemo.html',
        controller  : 'EditMemoController',
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
    $routeProvider.when('/erp/widget/detail/memo/:idmemo',
    {
        templateUrl : 'angular/partial/erp/widget/memo/detailmemo.html',
        controller  : 'DetailMemoController',
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
