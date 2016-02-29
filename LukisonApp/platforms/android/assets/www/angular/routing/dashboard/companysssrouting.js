'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
    $routeProvider.when('/dashboard/company/sss/marketing',
    {
        templateUrl : 'angular/partial/dashboard/company/sss/marketing.html',
        controller  : 'DashCompSssMarketingController',
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

    $routeProvider.when('/dashboard/company/sss/sales',
    {
        templateUrl : 'angular/partial/dashboard/company/sss/sales.html',
        controller  : 'DashCompSssSalesController',
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
    $routeProvider.when('/dashboard/company/sss/purchasing',
    {
        templateUrl : 'angular/partial/dashboard/company/sss/purchasing.html',
        controller  : 'DashCompSssPurchasingController',
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

    $routeProvider.when('/dashboard/company/sss/warehouse',
    {
        templateUrl : 'angular/partial/dashboard/company/sss/warehouse.html',
        controller  : 'DashCompSssWarehouseController',
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