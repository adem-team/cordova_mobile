'use strict';
myAppModule.controller("ListBarangUmumController", ["$scope", "$location","$http", "authService", "auth","$window","$cordovaBarcodeScanner", function ($scope, $location, $http, authService, auth,$window,$cordovaBarcodeScanner) 
{
    
    $scope.loading  = true;
    $scope.userInfo = auth;
    $http.get('http://api.lukisongroup.com/master/barangumums?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa&expand=type,kategori,unit')
    .success(function(data,status, headers, config) 
    {
        $scope.barangumums = data.BarangUmum ;
    })

    .error(function (data, status, header, config) 
    {
            
    })

    .finally(function()
    {
        $scope.loading = false;
    });


    $scope.deletebarangumum = function(barangumum)
    {
       var nama = barangumum.NM_BARANG;
       var id = barangumum.ID;
        if(confirm("Apakah Anda Yakin Menghapus Barang Umum:" + nama))
        {
                $cordovaBarcodeScanner
                  .scan()
                  .then(function(barcodeData) {
                    // Success! Barcode data is here
                  }, function(error) {
                    // An error occurred
                  });
        }   
    }

    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }

}]);

myAppModule.controller("ListKategoriController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{

    $scope.loading  = true;
    $scope.userInfo = auth;
    $http.get('http://api.lukisongroup.com/master/kategoris?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa')
    .success(function(data,status, headers, config) 
    {
        $scope.categories = data.Kategori ;

    })

    .error(function (data, status, header, config) 
    {
            
    })

    .finally(function(){
        $scope.loading = false;
    });

    $scope.deletekategori = function(category)
    {
       var id = category.ID;
       var nama = category.NM_KATEGORI;
        if(confirm("Apakah Anda Yakin Menghapus Kategori:" + nama))
        {
            $location.path('/salesman/delete/kategori/'+ id)
        }   
    }

    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }

}]);

myAppModule.controller("ListTipeBarangController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{

    $scope.loading  = true;
    $scope.userInfo = auth;
    $http.get('http://api.lukisongroup.com/master/tipebarangs?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa')
    .success(function(data,status, headers, config) 
    {
        $scope.typebarangs = data.Tipebarang ;
    })

    .error(function (data, status, header, config) 
    {
            
    })

    .finally(function(){
        $scope.loading = false;
    });

    $scope.deletetipebarang = function(typebarang)
    {
       var id = typebarang.ID;
       var nama = typebarang.NM_TYPE;
        if(confirm("Apakah Anda Yakin Menghapus Type Barang:" + nama))
        {
            $location.path('/salesman/delete/tipebarang/'+ id)
        }   
    }

    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
}]);

myAppModule.controller("ListSuplierController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{
    $scope.loading  = true;
    $scope.userInfo = auth;
    $http.get('http://api.lukisongroup.com/master/supliers?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa')
    .success(function(data,status, headers, config) 
    {
        $scope.supliers = data.Suplier ;
    })

    .error(function (data, status, header, config) 
    {
            
    })

    .finally(function(){
        $scope.loading = false;
    });

    $scope.deletesuplier = function(suplier)
    {
       var id = suplier.ID;
       var nama = suplier.NM_SUPPLIER;
        if(confirm("Apakah Anda Yakin Menghapus Suplier:" + nama))
        {
            $location.path('/salesman/delete/suplier/'+ id)
        }   
    }
    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
}]);

myAppModule.controller("ListBarangUnitController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{
    $scope.loading  = true;
    $scope.userInfo = auth;
    $http.get('http://api.lukisongroup.com/master/unitbarangs?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa')
    .success(function(data,status, headers, config) 
    {
        $scope.unitbarangs = data.Unitbarang ;
    })

    .error(function (data, status, header, config) 
    {
            
    })

    .finally(function(){
        $scope.loading = false;
    });

    $scope.deletebarangunit = function(unitbarang)
    {
       var id = unitbarang.ID;
       var nama = unitbarang.NM_UNIT;
        if(confirm("Apakah Anda Yakin Menghapus Unit Barang:" + nama))
        {
            $location.path('/salesman/delete/barangunit/'+ id)
        }   
    }

    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
}]);
   

    

