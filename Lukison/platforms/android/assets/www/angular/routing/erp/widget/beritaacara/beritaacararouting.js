'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
	$routeProvider.when('/erp/widget/list/beritaacara',
	{
		templateUrl	: 'angular/partial/erp/widget/beritaacara/listberitaacara.html',
		controller 	: 'ListBeritaAcaraController',
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
    $routeProvider.when('/erp/widget/new/beritaacara',
    {
        templateUrl : 'angular/partial/erp/widget/beritaacara/newberitaacara.html',
        controller  : 'NewBeritaAcaraController',
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
    $routeProvider.when('/erp/widget/edit/beritaacara/:idberitaacara',
    {
        templateUrl : 'angular/partial/erp/widget/beritaacara/editberitaacara.html',
        controller  : 'EditBeritaAcaraController',
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
    $routeProvider.when('/erp/widget/detail/beritaacara/:idberitaacara',
    {
        templateUrl : 'angular/partial/erp/widget/beritaacara/detailberitaacara.html',
        controller  : 'DetailBeritaAcaraController',
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
