'use strict';
myAppModule.controller("NewBarangUmumController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{

    $scope.userInfo = auth;

    $http.get('http://api.lukisongroup.com/master/kategoris?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa')
    .success(function(data,status, headers, config) 
    {
        $scope.categories = data.Kategori ;

    })
    .error(function (data, status, header, config) 
    {
        alert("Tidak Bisa Mendapatkan Data Kategori");    
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
    });

    $http.get('http://api.lukisongroup.com/master/unitbarangs?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa')
    .success(function(data,status, headers, config) 
    {
        $scope.unitbarangs = data.Unitbarang ;
    });

    $scope.submitForm = function(barangumum)
    {
        $scope.barangumum = angular.copy(barangumum);
        var gambarbarang =$scope.barangumum.file.base64;
        var namabarang = $scope.barangumum.namaproduct;
        var suplier = $scope.barangumum.suplier;
        var kategori = $scope.barangumum.kategori;
        var typebarang = $scope.barangumum.typebarang;
        var unitbarang = $scope.barangumum.unitbarang;
        var quantity = $scope.barangumum.quantity;
        $scope.loading =true;
    }


	$scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);

myAppModule.controller("NewKategoriController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{

    $scope.userInfo = auth;

    $scope.submit = function()
    {
        $scope.loading = true;
        var data = $.param({json: JSON.stringify
                ({
                    eknamakategori: $scope.eknamakategori,
                    eknote: $scope.eknote,
                    status: $scope.statuskategori
                })
            });
        console.log(data);

    }

    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);

myAppModule.controller("NewSuplierController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{

    $scope.userInfo = auth;

    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);

myAppModule.controller("NewTipeBarangController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{
    $scope.submitForm = function(isValid)
    {
        if (isValid) 
        { 
            
            $scope.loading = true;
            var data = $.param({json: JSON.stringify
                ({
                    eknamakategori: $scope.eknamakategori,
                    eknote: $scope.eknote,
                    status: $scope.statuskategori
                })
            });

            $http.post('http://api.lukisongroup.com/master/kategoris?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa',data)
            .success(function(data,status, headers, config) 
            {
                alert("Berhasil");

            })

            .error(function (data, status, header, config) 
            {
                alert("Error");       
            })

            .finally(function()
            {
               alert("Finally");
                $scope.loading = false;  
            });
        }
        else
        {
            alert("form tidak valid");
            return true;
        }


    }
    $scope.userInfo = auth;

    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);

myAppModule.controller("NewBarangUnitController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{
    $scope.submitForm = function(isValid)
    {
        if (isValid) 
        { 
            
            $scope.loading = true;
            var data = $.param({json: JSON.stringify
                ({
                    eknamakategori: $scope.eknamakategori,
                    eknote: $scope.eknote,
                    status: $scope.statuskategori
                })
            });

            $http.post('http://api.lukisongroup.com/master/kategoris?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa',data)
            .success(function(data,status, headers, config) 
            {
                alert("Berhasil");

            })

            .error(function (data, status, header, config) 
            {
                alert("Error");       
            })

            .finally(function()
            {
               alert("Finally");
                $scope.loading = false;  
            });
        }
        else
        {
            alert("form tidak valid");
        }


    }
    $scope.userInfo = auth;

    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);

