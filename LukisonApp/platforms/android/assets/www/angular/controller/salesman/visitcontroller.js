'use strict';
myAppModule.controller("VisitController", ["$scope", "$location","$http", "authService", "auth","$window","apiService","regionalService",
function ($scope, $location, $http, authService, auth,$window,apiService,regionalService) 
{
    $scope.loading  = true;
    apiService.listcustomer()
    .then(function (result) 
    {
        $scope.customers = result.Customer;
        $scope.loading  = false;
        // console.log($scope.customers);   
    });

}]);