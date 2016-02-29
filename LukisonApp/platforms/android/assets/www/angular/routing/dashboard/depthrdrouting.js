'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
    $routeProvider.when('/dashboard/dept/hrd/personalia',
    {
        templateUrl : 'angular/partial/dashboard/dept/hrd/personalia.html',
        controller  : 'DashDeptHrdPersonaliaController',
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
    $routeProvider.when('/dashboard/dept/hrd/rekrutmen',
    {
        templateUrl : 'angular/partial/dashboard/dept/hrd/rekrutmen.html',
        controller  : 'DashDeptHrdRekrutmenController',
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
    $routeProvider.when('/dashboard/dept/hrd/absensi',
    {
        templateUrl : 'angular/partial/dashboard/dept/hrd/absensi.html',
        controller  : 'DashDeptHrdAbsensiController',
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
    $routeProvider.when('/dashboard/dept/hrd/payroll',
    {
        templateUrl : 'angular/partial/dashboard/dept/hrd/payroll.html',
        controller  : 'DashDeptHrdPayrollController',
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
    $routeProvider.when('/dashboard/dept/hrd/modul',
    {
        templateUrl : 'angular/partial/dashboard/dept/hrd/modul.html',
        controller  : 'DashDeptHrdModulController',
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
    $routeProvider.when('/dashboard/dept/hrd/generalaffair',
    {
        templateUrl : 'angular/partial/dashboard/dept/hrd/generalaffair.html',
        controller  : 'DashDeptHrdGeneralAffairController',
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