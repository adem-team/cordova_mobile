'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
    $routeProvider.when('/dashboard/dept/designer/matrialpromotion',
    {
        templateUrl : 'angular/partial/dashboard/dept/designer/matrialpromotion.html',
        controller  : 'DashDeptDesignerMatrialPromotionController',
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
    $routeProvider.when('/dashboard/dept/designer/draffdesign',
    {
        templateUrl : 'angular/partial/dashboard/dept/designer/draffdesign.html',
        controller  : 'DashDeptDesignerDraffController',
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