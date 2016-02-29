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

myAppModule.controller("AgendaController", ["$scope", "$location","$http", "authService", "auth","$window","apiService","regionalService","singleapiService",
function ($scope, $location, $http, authService, auth,$window,apiService,regionalService,singleapiService) 
{
    $scope.loading  = true;
    var idsalesman = auth.id;
    var tanggal = "2016-02-02";
    apiService.listagenda(idsalesman,tanggal)
    .then(function (result) 
    {
        var idgroupcustomer;
        angular.forEach(result.Agenda, function(value, key) 
        {
          idgroupcustomer =value.SCDL_GROUP;
        });

        singleapiService.singlelistgroupcustomer(idgroupcustomer)
        .then(function (result) 
        {
            console.log(result);
            $scope.customers = result.Customer;
            $scope.loading  = false;
        });
    });

}]);