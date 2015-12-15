'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
	$routeProvider.when('/erp/masterbarang/edit/barangumum/:idbarangumum',
	{
		templateUrl	: 'angular/partial/erp/masterbarang/editbarangumum.html',
		controller 	: 'EditBarangUmumController',
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
    $routeProvider.when('/erp/masterbarang/edit/kategori/:idkategori',
    {
        templateUrl : 'angular/partial/erp/masterbarang/editkategori.html',
        controller  : 'EditKategoriController',
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
    $routeProvider.when('/erp/masterbarang/edit/suplier/:idsuplier',
    {
        templateUrl : 'angular/partial/erp/masterbarang/editsuplier.html',
        controller  : 'EditSuplierController',
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

    $routeProvider.when('/erp/masterbarang/edit/tipebarang/:idtipebarang',
    {
        templateUrl : 'angular/partial/erp/masterbarang/edittipebarang.html',
        controller  : 'EditTipeBarangController',
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

    $routeProvider.when('/erp/masterbarang/edit/barangunit/:idbarangunit',
    {
        templateUrl : 'angular/partial/erp/masterbarang/editbarangunit.html',
        controller  : 'EditBarangUnitController',
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
