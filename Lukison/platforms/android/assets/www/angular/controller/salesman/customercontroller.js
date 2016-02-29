'use strict';
myAppModule.controller("GroupCustController", ["$scope", "$location","$http", "authService", "auth","$window","apiService","regionalService",
function ($scope, $location, $http, authService, auth,$window,apiService,regionalService) 
{
    $scope.loading  = true;
    apiService.listgroupcustomer()
    .then(function (result) 
    {
        console.log(result);
        $scope.groupcustomers = result.GroupCustomer;
        $scope.loading  = false;
    });

    $scope.userInfo = auth;
	$scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);


myAppModule.controller("DetailGroupCustController", ["$scope", "$location","$http", "$routeParams","authService", "auth","$window","singleapiService","regionalService",
function ($scope, $location, $http,$routeParams, authService, auth,$window,singleapiService,regionalService) 
{
    $scope.loading  = true;
    var idgroupcustomer = $routeParams.idgroupcustomer;
    singleapiService.singlelistgroupcustomer(idgroupcustomer)
    .then(function (result) 
    {
        console.log(result);
        $scope.customers = result.Customer;
        $scope.loading  = false;
    });

    $scope.userInfo = auth;
    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);



