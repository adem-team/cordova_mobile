'use strict';
myAppModule.controller("ChartEsmController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{
    $scope.userInfo = auth;

    var jsonDatasales = $.ajax
    ({
          url: "http://api.lukisongroup.com/chart/esm-sales",
          type: "GET",
          dataType:"json",
          async: false
    }).responseText;

    var myData = jsonDatasales;
    $scope.mt=JSON.parse(myData)['SalesItem_Mt'];
    $scope.gt=JSON.parse(myData)['SalesItem_Gt'];
    $scope.horeca=JSON.parse(myData)['SalesItem_Horeca'];
    $scope.others=JSON.parse(myData)['SalesItem_Others'];
    
    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
}]);

myAppModule.controller("ChartWarehousesController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{
    $scope.userInfo = auth;
    var jsonDatawarehouses = $.ajax
    ({
          url: "http://api.lukisongroup.com/chart/esm-warehouses",
          type: "GET",
          dataType:"json",
          async: false
    }).responseText;

    var myData1 = jsonDatawarehouses;
    $scope.fi=JSON.parse(myData1)['WhFactoryItem'];
    $scope.di=JSON.parse(myData1)['WhDistributorItem'];
    $scope.si=JSON.parse(myData1)['WhSubdistItem'];
    $scope.ci=JSON.parse(myData1)['WhCustomerItem'];

    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
}]);

myAppModule.controller("ChartHrmController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{
    $scope.userInfo = auth;
    var jsonDatapersonalias = $.ajax
    ({
          url: "http://api.lukisongroup.com/chart/hrm-personalias",
          type: "GET",
          dataType:"json",
          async: false,
    }).responseText;

    var myData2= jsonDatapersonalias;
    $scope.sss_pie_myDatasource=JSON.parse(myData2)['SourcePie_sss'];
    $scope.lipat_pie_myDatasource=JSON.parse(myData2)['SourcePie_lipat'];
    $scope.esm_pie_myDatasource=JSON.parse(myData2)['SourcePie_esm']; 

    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
}]);


myAppModule.controller("ChartHrmEmployeTurnOverController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{
    $scope.userInfo = auth;
    var jsonDatapersonalias = $.ajax
    ({
          url: "http://api.lukisongroup.com/chart/hrm-personalias",
          type: "GET",
          dataType:"json",
          async: false,
    }).responseText;

    var myData1= jsonDatapersonalias;

     $scope.support_attrs=JSON.parse(myData1)['support_attrs'];
     $scope.support_catg=JSON.parse(myData1)['support_catg'];
     $scope.support_dataset=JSON.parse(myData1)['support_dataset'];
     
     $scope.bisnis_attrs=JSON.parse(myData1)['bisnis_attrs'];
     $scope.bisnis_catg=JSON.parse(myData1)['bisnis_catg'];
     $scope.bisnis_dataset=JSON.parse(myData1)['bisnis_dataset'];

     $scope.Employe_Summary = JSON.parse(myData1)['Employe_Summary']; 

    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
}]);

