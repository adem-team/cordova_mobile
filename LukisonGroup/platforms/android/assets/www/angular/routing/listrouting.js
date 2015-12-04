'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{

    $routeProvider.when('/salesman/listbarangumum',
    {
        templateUrl : 'angular/partial/salesman/listbarangumum.html',
        controller  : 'ListBarangUmumController',
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
    $routeProvider.when('/salesman/listkategori',
    {
        templateUrl : 'angular/partial/salesman/listkategori.html',
        controller  : 'ListKategoriController',
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

    $routeProvider.when('/salesman/listsuplier',
    {
        templateUrl : 'angular/partial/salesman/listsuplier.html',
        controller  : 'ListSuplierController',
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

    $routeProvider.when('/salesman/listtipebarang',
    {
        templateUrl : 'angular/partial/salesman/listtipebarang.html',
        controller  : 'ListTipeBarangController',
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
