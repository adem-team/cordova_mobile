'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
	$routeProvider.when('/erp/masterbarang/detail/barangumum/:idbarangumum',
	{
		templateUrl	: 'angular/partial/erp/masterbarang/detailbarangumum.html',
		controller 	: 'DetailBarangUmumController',
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
    $routeProvider.when('/erp/masterbarang/detail/kategori/:idkategori',
    {
        templateUrl : 'angular/partial/erp/masterbarang/detailkategori.html',
        controller  : 'DetailKategoriController',
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
    $routeProvider.when('/erp/masterbarang/detail/suplier/:idsuplier',
    {
        templateUrl : 'angular/partial/erp/masterbarang/detailsuplier.html',
        controller  : 'DetailSuplierController',
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

    $routeProvider.when('/erp/masterbarang/detail/tipebarang/:idtipebarang',
    {
        templateUrl : 'angular/partial/erp/masterbarang/detailtipebarang.html',
        controller  : 'DetailTipeBarangController',
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

    $routeProvider.when('/erp/masterbarang/detail/barangunit/:idbarangunit',
    {
        templateUrl : 'angular/partial/erp/masterbarang/detailbarangunit.html',
        controller  : 'DetailBarangUnitController',
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
