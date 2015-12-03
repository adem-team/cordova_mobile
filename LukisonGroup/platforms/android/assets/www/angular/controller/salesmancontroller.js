'use strict';
myAppModule.controller("SalesmanController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{
    
    $scope.loading = true ;
    $scope.userInfo = auth;
    $http.get('http://api.lukisongroup.com/master/barangumums?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa')
    .success(function(data,status, headers, config) 
    {
        $scope.barangumums = data.BarangUmum ;
        $scope.loading = false ;
    })

    .error(function (data, status, header, config) 
    {
            
    });


    $http.get('http://api.lukisongroup.com/master/kategoris?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa')
    .success(function(data,status, headers, config) 
    {
        $scope.categories = data.Kategori ;
    })

    .error(function (data, status, header, config) 
    {
            
    });

    $http.get('http://api.lukisongroup.com/master/tipebarangs?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa')
    .success(function(data,status, headers, config) 
    {
        $scope.typebarangs = data.Tipebarang ;

    })

    .error(function (data, status, header, config) 
    {
            
    });

    $http.get('http://api.lukisongroup.com/master/supliers?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa')
    .success(function(data,status, headers, config) 
    {
        $scope.supliers = data.Suplier ;

    })

    .error(function (data, status, header, config) 
    {
            
    });

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

    var jsonDatapersonalias = $.ajax
    ({
          url: "http://api.lukisongroup.com/chart/hrm-personalias",
          type: "GET",
          dataType:"json",
          async: false
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

