'use strict';
myAppModule.controller("NewCustomerController", ["$scope", "$location","$http", "authService", "auth","$window","apiService","regionalService","ngToast",
function ($scope, $location, $http, authService, auth,$window,apiService,regionalService,ngToast) 
{
    $scope.loading = true;

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

    $scope.userInfo = auth;

	$scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
  
}]);



