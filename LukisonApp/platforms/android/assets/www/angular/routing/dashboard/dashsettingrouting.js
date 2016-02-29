'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
    $routeProvider.when('/dashboard/setting/adminlg',
    {
        templateUrl : 'angular/partial/dashboard/setting/adminlg.html',
        controller  : 'DashSettingAdminLGController',
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

    $routeProvider.when('/dashboard/setting/admincrm',
    {
        templateUrl : 'angular/partial/dashboard/setting/admincrm.html',
        controller  : 'DashSettingAdminCRMController',
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
    $routeProvider.when('/dashboard/setting/adminkrema',
    {
        templateUrl : 'angular/partial/dashboard/setting/adminkrema.html',
        controller  : 'DashSettingAdminKremaController',
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

    $routeProvider.when('/dashboard/setting/adminvinding',
    {
        templateUrl : 'angular/partial/dashboard/setting/adminvinding.html',
        controller  : 'DashSettingAdminVindingController',
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