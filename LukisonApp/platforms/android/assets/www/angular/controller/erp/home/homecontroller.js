'use strict';
myAppModule.controller("HomeController", ["$scope", "$location","$http", "authService", "auth","$window","apiService","regionalService",
function ($scope, $location, $http, authService, auth,$window,apiService,regionalService) 
{
    $scope.loading = true;
    $scope.newcustomer = function()
    {
        $location.path('/customer');
    }

    // apiService.listparentcustomerkategoris()
    // .then(function (result) 
    // {
    //     $scope.customerkategoris = result.CustomKategori;
    //     $scope.loading  = false;
    // });
    
    // apiService.listcustomer()
    // .then(function (result) 
    // {
    //     $scope.customers = result.Customer;
    //     $scope.loading  = false;
    //     console.log($scope.customers);   
    // });

    apiService.listdistributor()
    .then(function (result) 
    {
        $scope.distributors = result.Distributor;
        $scope.loading  = false; 
    });

    regionalService.listpropinsi()
    .then(function (result) 
    {
        $scope.provinsis = result.Provinsi;  
    });

    // var kab = regionalService.listkabupaten()
    // .then(function (result) 
    // {
    //     $scope.kabupatens = result.Kabupaten; 
    //     return result; 
    // });

    $scope.provinsichange=function()
    {
        $scope.loading = true;
        $scope.filterprovinsi = $scope.customer.PROVINCE_ID;
        var idprovinsi = $scope.filterprovinsi;
        regionalService.singlelistkabupaten(idprovinsi)
        .then(function (result) 
        {
            $scope.showkabupaten = true;
            $scope.kabupatens = result.Kabupaten;
            console.log($scope.kabupatens);
            $scope.loading = false;
        });
    }

    $scope.kabupatenchange = function()
    {
        $scope.showkodepos = true;
    }

    $scope.kodeposchange = function()
    {
        $scope.showalamat = true;
    }

    $scope.viscustomer = function()
    {
        $location.path('/visit');
    }

    $scope.reportase = function()
    {
        $location.path('/report');
    }

    $scope.profile = function()
    {
        $location.path('/profile');
    }

    $scope.mapcustomer = function()
    {
        $location.path('/mapcustomer');
    }

    $scope.userInfo = auth;

	$scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);



