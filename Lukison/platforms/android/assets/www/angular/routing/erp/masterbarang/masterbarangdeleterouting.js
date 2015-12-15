'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
	$routeProvider.when('/salesman/delete/barangumum/:idbarangumum',
	{
		templateUrl	: 'angular/partial/erp/masterbarang/listbarangumum.html',
		controller 	: 'DeleteBarangUmumController',
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
    $routeProvider.when('/salesman/delete/kategori/:idkategori',
    {
        templateUrl : 'angular/partial/erp/masterbarang/editkategori.html',
        controller  : 'DeleteKategoriController',
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
    $routeProvider.when('/salesman/delete/suplier/:idsuplier',
    {
        templateUrl : 'angular/partial/erp/masterbarang/editsuplier.html',
        controller  : 'DeleteSuplierController',
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

    $routeProvider.when('/salesman/delete/tipebarang/:idtipebarang',
    {
        templateUrl : 'angular/partial/erp/masterbarang/edittipebarang.html',
        controller  : 'DeleteTipeBarangController',
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

    $routeProvider.when('/salesman/delete/barangunit/:idbarangunit',
    {
        templateUrl : 'angular/partial/erp/masterbarang/editbarangunit.html',
        controller  : 'DeleteBarangUnitController',
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
