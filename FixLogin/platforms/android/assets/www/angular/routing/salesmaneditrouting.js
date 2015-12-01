'use strict';
myAppModule.config(['$routeProvider', function($routeProvider,$authProvider)
{
	$routeProvider.when('/salesman/edit/barangumum/:idbarangumum',
	{
		templateUrl	: 'angular/partial/salesman/editbarangumum.html',
		controller 	: 'SalesmanEditController',
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
    $routeProvider.when('/salesman/edit/kategori/:idkategori',
    {
        templateUrl : 'angular/partial/salesman/editkategori.html',
        controller  : 'SalesmanEditController',
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
    $routeProvider.when('/salesman/edit/suplier/:idsuplier',
    {
        templateUrl : 'angular/partial/salesman/editsuplier.html',
        controller  : 'SalesmanEditController',
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

    $routeProvider.when('/salesman/edit/tipebarang/:idtipebarang',
    {
        templateUrl : 'angular/partial/salesman/edittipebarang.html',
        controller  : 'SalesmanEditController',
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
