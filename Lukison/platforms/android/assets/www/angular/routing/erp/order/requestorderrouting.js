'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
	$routeProvider.when('/erp/order/list/requestorder',
	{
		templateUrl	: 'angular/partial/erp/order/requestorder/listrequestorder.html',
		controller 	: 'ListRequestOrderController',
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
    
    $routeProvider.when('/erp/order/new/requestorder',
    {
        templateUrl : 'angular/partial/erp/order/requestorder/newrequestorder.html',
        controller  : 'NewRequestOrderController',
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
    $routeProvider.when('/erp/order/edit/requestorder/:idrequestorder',
    {
        templateUrl : 'angular/partial/erp/order/requestorder/editrequestorder.html',
        controller  : 'EditRequestOrderController',
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
    $routeProvider.when('/erp/order/detail/requestorder/:idrequestorder',
    {
        templateUrl : 'angular/partial/erp/order/requestorder/detailrequestorder.html',
        controller  : 'DetailRequestOrderController',
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
    $routeProvider.when('/erp/order/delete/requestorder/:idrequestorder',
    {
        templateUrl : 'angular/partial/erp/order/requestorder/deleterequestorder.html',
        controller  : 'DetailRequestOrderController',
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
