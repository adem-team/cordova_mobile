'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{

    $routeProvider.when('/erp/chart/esm/sales',
    {
        templateUrl : 'angular/partial/erp/chart/chartesmsales.html',
        controller  : 'ChartEsmController',
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
    
    $routeProvider.when('/erp/chart/esm/warehouses',
    {
        templateUrl : 'angular/partial/erp/chart/chartesmwarehouses.html',
        controller  : 'ChartWarehousesController',
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

    $routeProvider.when('/erp/chart/hrm/personalia',
    {
        templateUrl : 'angular/partial/erp/chart/charthrmpersonalia.html',
        controller  : 'ChartHrmController',
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

    $routeProvider.when('/erp/chart/hrm/employeturnover',
    {
        templateUrl : 'angular/partial/erp/chart/charthrmturnover.html',
        controller  : 'ChartHrmEmployeTurnOverController',
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
