'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
    $routeProvider.when('/dashboard/company/esm/datamasterproduction',
    {
        templateUrl : 'angular/partial/dashboard/company/esm/datamasterproduction.html',
        controller  : 'DashCompEsmDataMasterProductionController',
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

    $routeProvider.when('/dashboard/company/esm/purchasing',
    {
        templateUrl : 'angular/partial/dashboard/company/esm/purchasing.html',
        controller  : 'DashCompEsmPurchasingController',
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
    $routeProvider.when('/dashboard/company/esm/warehouse',
    {
        templateUrl : 'angular/partial/dashboard/company/esm/warehouse.html',
        controller  : 'DashCompEsmWarehouseController',
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

    $routeProvider.when('/dashboard/company/esm/factory',
    {
        templateUrl : 'angular/partial/dashboard/company/esm/factory.html',
        controller  : 'DashCompEsmFactoryController',
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
    $routeProvider.when('/dashboard/company/esm/marketing',
    {
        templateUrl : 'angular/partial/dashboard/company/esm/marketing.html',
        controller  : 'DashCompEsmMarketingController',
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
    $routeProvider.when('/dashboard/company/esm/sales',
    {
        templateUrl : 'angular/partial/dashboard/company/esm/sales.html',
        controller  : 'DashCompEsmSalesController',
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