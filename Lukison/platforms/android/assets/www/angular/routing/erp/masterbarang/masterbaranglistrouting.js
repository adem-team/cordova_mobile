'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{

    $routeProvider.when('/erp/masterbarang/list/barangumum',
    {
        templateUrl : 'angular/partial/erp/masterbarang/listbarangumum.html',
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
    $routeProvider.when('/erp/masterbarang/list/kategori',
    {
        templateUrl : 'angular/partial/erp/masterbarang/listkategori.html',
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

    $routeProvider.when('/erp/masterbarang/list/suplier',
    {
        templateUrl : 'angular/partial/erp/masterbarang/listsuplier.html',
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

    $routeProvider.when('/erp/masterbarang/list/tipebarang',
    {
        templateUrl : 'angular/partial/erp/masterbarang/listtipebarang.html',
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

    $routeProvider.when('/erp/masterbarang/list/barangunit',
    {
        templateUrl : 'angular/partial/erp/masterbarang/listbarangunit.html',
        controller  : 'ListBarangUnitController',
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
