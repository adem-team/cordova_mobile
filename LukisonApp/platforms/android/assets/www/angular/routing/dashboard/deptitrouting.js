'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
    $routeProvider.when('/dashboard/dept/it/admin',
    {
        templateUrl : 'angular/partial/dashboard/dept/it/admin.html',
        controller  : 'DashDeptItAdminController',
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
    $routeProvider.when('/dashboard/dept/it/programmer',
    {
        templateUrl : 'angular/partial/dashboard/dept/it/programmer.html',
        controller  : 'DashDeptItProgrammerController',
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
    $routeProvider.when('/dashboard/dept/it/dbe',
    {
        templateUrl : 'angular/partial/dashboard/dept/it/dbe.html',
        controller  : 'DashDeptItDbeController',
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
    $routeProvider.when('/dashboard/dept/it/networking',
    {
        templateUrl : 'angular/partial/dashboard/dept/it/networking.html',
        controller  : 'DashDeptItNetworkingController',
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
    $routeProvider.when('/dashboard/dept/it/support',
    {
        templateUrl : 'angular/partial/dashboard/dept/it/support.html',
        controller  : 'DashDeptItSupportController',
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
    $routeProvider.when('/dashboard/dept/it/api',
    {
        templateUrl : 'angular/partial/dashboard/dept/it/api.html',
        controller  : 'DashDeptItApiController',
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