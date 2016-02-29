'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
    $routeProvider.when('/dashboard/report/report-sss',
    {
        templateUrl : 'angular/partial/dashboard/report/reportsss.html',
        controller  : 'DashReportSSSController',
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

    $routeProvider.when('/dashboard/report/report-alg',
    {
        templateUrl : 'angular/partial/dashboard/report/reportalg.html',
        controller  : 'DashReportALGController',
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
    $routeProvider.when('/dashboard/report/report-esm',
    {
        templateUrl : 'angular/partial/dashboard/report/reportesm.html',
        controller  : 'DashReportESMController',
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

    $routeProvider.when('/dashboard/report/report-gosent',
    {
        templateUrl : 'angular/partial/dashboard/report/reportgosent.html',
        controller  : 'DashReportGOSENTController',
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