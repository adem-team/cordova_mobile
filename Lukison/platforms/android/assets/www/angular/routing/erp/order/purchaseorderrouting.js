'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
	$routeProvider.when('/erp/order/list/purchaseorder',
	{
		templateUrl	: 'angular/partial/erp/order/purchaseorder/listpurchaseorder.html',
		controller 	: 'ListPurchaseOrderController',
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
    $routeProvider.when('/erp/order/new/purchaseorder',
    {
        templateUrl : 'angular/partial/erp/order/purchaseorder/newpurchaseorder.html',
        controller  : 'NewPurchaseOrderController',
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
    $routeProvider.when('/erp/order/edit/purchaseorder/:idpurchaseorder',
    {
        templateUrl : 'angular/partial/erp/order/purchaseorder/editpurchaseorder.html',
        controller  : 'EditPurchaseOrderController',
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
    $routeProvider.when('/erp/order/detail/purchaseorder/:idpurchaseorder',
    {
        templateUrl : 'angular/partial/erp/order/purchaseorder/detailpurchaseorder.html',
        controller  : 'DetailPurchaseOrderController',
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

    $routeProvider.when('/erp/order/delete/purchaseorder/:idpurchaseorder',
    {
        templateUrl : 'angular/partial/erp/order/purchaseorder/deletepurchaseorder.html',
        controller  : 'DeletePurchaseOrderController',
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
