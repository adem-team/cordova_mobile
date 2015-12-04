'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{

    $routeProvider.when('/salesman/chart/esm/sales',
    {
        templateUrl : 'angular/partial/salesman/chartesmsales.html',
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
    
    $routeProvider.when('/salesman/chart/esm/warehouses',
    {
        templateUrl : 'angular/partial/salesman/chartesmwarehouses.html',
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

    $routeProvider.when('/salesman/chart/hrm/personalia',
    {
        templateUrl : 'angular/partial/salesman/charthrmpersonalia.html',
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
}]);
