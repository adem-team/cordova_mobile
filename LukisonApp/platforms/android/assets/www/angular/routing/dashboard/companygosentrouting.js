'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
    $routeProvider.when('/dashboard/company/gosent/marketing',
    {
        templateUrl : 'angular/partial/dashboard/company/gosent/marketing.html',
        controller  : 'DashCompGosentMarketingController',
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

    $routeProvider.when('/dashboard/company/gosent/product',
    {
        templateUrl : 'angular/partial/dashboard/company/gosent/product.html',
        controller  : 'DashCompGosentProductController',
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
    $routeProvider.when('/dashboard/company/gosent/sales',
    {
        templateUrl : 'angular/partial/dashboard/company/gosent/sales.html',
        controller  : 'DashCompGosentSalesController',
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

    $routeProvider.when('/dashboard/company/gosent/affiliation',
    {
        templateUrl : 'angular/partial/dashboard/company/gosent/affiliation.html',
        controller  : 'DashCompGosentAffiliationController',
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
    $routeProvider.when('/dashboard/company/gosent/helpdesk',
    {
        templateUrl : 'angular/partial/dashboard/company/gosent/helpdesk.html',
        controller  : 'DashCompGosentHelpDeskController',
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
    $routeProvider.when('/dashboard/company/gosent/purchasing',
    {
        templateUrl : 'angular/partial/dashboard/company/gosent/purchasing.html',
        controller  : 'DashCompGosentPurchasingController',
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
    $routeProvider.when('/dashboard/company/gosent/warehouse',
    {
        templateUrl : 'angular/partial/dashboard/company/gosent/warehouse.html',
        controller  : 'DashCompGosentWarehouseController',
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