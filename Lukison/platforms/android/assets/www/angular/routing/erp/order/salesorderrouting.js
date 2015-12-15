'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
	$routeProvider.when('/erp/order/list/salesorder',
	{
		templateUrl	: 'angular/partial/erp/order/salesorder/listsalesorder.html',
		controller 	: 'ListSalesOrderController',
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
    $routeProvider.when('/erp/order/new/salesorder',
    {
        templateUrl : 'angular/partial/erp/order/salesorder/newsalesorder.html',
        controller  : 'NewSalesOrderController',
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
    $routeProvider.when('/erp/order/edit/salesorder/:idsalesorder',
    {
        templateUrl : 'angular/partial/erp/order/salesorder/editsalesorder.html',
        controller  : 'EditSalesOrderController',
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
    $routeProvider.when('/erp/order/detail/salesorder/:idsalesorder',
    {
        templateUrl : 'angular/partial/erp/order/salesorder/detailsalesorder.html',
        controller  : 'DetailSalesOrderController',
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

    $routeProvider.when('/erp/order/delete/salesorder/:idsalesorder',
    {
        templateUrl : 'angular/partial/erp/order/salesorder/deletesalesorder.html',
        controller  : 'DeleteSalesOrderController',
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
