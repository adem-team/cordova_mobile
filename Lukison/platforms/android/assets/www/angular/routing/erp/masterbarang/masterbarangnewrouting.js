'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
	$routeProvider.when('/erp/masterbarang/new/barangumum',
	{
		templateUrl	: 'angular/partial/erp/masterbarang/newbarangumum.html',
		controller 	: 'NewBarangUmumController',
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
    $routeProvider.when('/erp/masterbarang/new/kategori',
    {
        templateUrl : 'angular/partial/erp/masterbarang/newkategori.html',
        controller  : 'NewKategoriController',
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
    $routeProvider.when('/erp/masterbarang/new/suplier',
    {
        templateUrl : 'angular/partial/erp/masterbarang/newsuplier.html',
        controller  : 'NewSuplierController',
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

    $routeProvider.when('/erp/masterbarang/new/tipebarang',
    {
        templateUrl : 'angular/partial/erp/masterbarang/newtipebarang.html',
        controller  : 'NewTipeBarangController',
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

    $routeProvider.when('/erp/masterbarang/new/barangunit',
    {
        templateUrl : 'angular/partial/erp/masterbarang/newbarangunit.html',
        controller  : 'NewBarangUnitController',
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
