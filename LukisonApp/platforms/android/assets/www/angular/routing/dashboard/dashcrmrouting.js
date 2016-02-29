'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
    $routeProvider.when('/dashboard/crm/manufactory',
    {
        templateUrl : 'angular/partial/dashboard/crm/manufactory.html',
        controller  : 'DashCrmManufactoryController',
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

    $routeProvider.when('/dashboard/crm/distributor',
    {
        templateUrl : 'angular/partial/dashboard/crm/distributor.html',
        controller  : 'DashCrmDistributorController',
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
    $routeProvider.when('/dashboard/crm/customer',
    {
        templateUrl : 'angular/partial/dashboard/crm/customer.html',
        controller  : 'DashCrmCustomerController',
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

    $routeProvider.when('/dashboard/crm/salesman',
    {
        templateUrl : 'angular/partial/dashboard/crm/salesman.html',
        controller  : 'DashCrmSalesmanController',
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
    $routeProvider.when('/dashboard/crm/salespromotion',
    {
        templateUrl : 'angular/partial/dashboard/crm/salespromotion.html',
        controller  : 'DashCrmSalesPromotionController',
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