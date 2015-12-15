'use strict';
myAppModule.controller("DeleteBarangUmumController", ["$scope", "$location","$http", "$routeParams", "authService", "auth", "$window", function ($scope, $location, $http, $routeParams, authService, auth, $window) 
{
    // $scope.loading = true ;
    $scope.userInfo = auth;
    $scope.idbarangumum = $routeParams.idbarangumum;
    
    alert($scope.idbarangumum);
    
    $scope.logout = function () 
    {
        
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";

    }
}]);

myAppModule.controller("DeleteKategoriController", ["$scope", "$location","$http", "$routeParams", "authService", "auth", "$window", function ($scope, $location, $http, $routeParams, authService, auth, $window) 
{
    $scope.loading = true ;
    $scope.userInfo = auth;
    $scope.idkategori = $routeParams.idkategori;
    $http.get('http://api.lukisongroup.com/master/kategoris/'+ $scope.idkategori + '?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa')
    .success(function(data,status, headers, config) 
    {
        $scope.ekid = data.ID ;
        $scope.ekkdkategori = data.KD_KATEGORI;
        $scope.eknamakategori = data.NM_KATEGORI;
        $scope.eknote = data.NOTE;
        $scope.ekstatus = data.STATUS;
        $scope.ekcorpid = data.CORP_ID;

    })

    .error(function (data, status, header, config) 
    {
            
    })

    .finally(function()
    {
        $scope.loading = false ;
    });

    $scope.logout = function () 
    {
        
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";

    }
}]);

myAppModule.controller("DeleteTipeBarangController", ["$scope", "$location","$http", "$routeParams", "authService", "auth", "$window", function ($scope, $location, $http, $routeParams, authService, auth, $window) 
{
    $scope.loading = true ;
    $scope.userInfo = auth;
    $scope.idtipebarang = $routeParams.idtipebarang;
    $http.get('http://api.lukisongroup.com/master/tipebarangs/'+ $scope.idtipebarang + '?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa')
    .success(function(data,status, headers, config) 
    {
        $scope.etbid = data.ID ;
        $scope.etbkdtype = data.KD_TYPE ;
        $scope.etbnamatype = data.NM_TYPE ;
        $scope.etbnote = data.NOTE ;
        $scope.etbstatus = data.STATUS ;
        $scope.etbcorpid = data.CORP_ID ;
    })

    .error(function (data, status, header, config) 
    {
            
    })

    .finally(function()
    {
        $scope.loading = false ;
    });

    $scope.logout = function () 
    {
        
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";

    }
}]);

myAppModule.controller("DeleteSuplierController", ["$scope", "$location","$http", "$routeParams", "authService", "auth", "$window", function ($scope, $location, $http, $routeParams, authService, auth, $window) 
{
    $scope.loading = true ;
    $scope.userInfo = auth;
    $scope.idsuplier = $routeParams.idsuplier;
    $http.get('http://api.lukisongroup.com/master/supliers/'+ $scope.idsuplier + '?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa')
    .success(function(data,status, headers, config) 
    {
        $scope.esupid = data.ID;
        $scope.esupkdsup = data.KD_SUPPLIER;
        $scope.esupnamasup = data.NM_SUPPLIER;
        $scope.esupalamat = data.ALAMAT;
        $scope.esupkota = data.KOTA;
        $scope.esuptlp = data.TLP;
        $scope.esupmobile = data.MOBILE;
        $scope.esupfax = data.FAX;
        $scope.esupemail = data.EMAIL;
        $scope.esupwebsite = data.WEBSITE;
        $scope.esupimage = data.IMAGE;
        $scope.esupnote = data.NOTE;
        $scope.esupkdcorp = data.KD_CORP;
        $scope.esupkdcab = data.KD_CAB;
        $scope.esupkddep = data.KD_DEP;
        $scope.esupstatus = data.STATUS;

    })

    .error(function (data, status, header, config) 
    {
            
    })

    .finally(function()
    {
        $scope.loading = false ;
    });

    $scope.logout = function () 
    {
        
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";

    }
}]);

myAppModule.controller("DeleteBarangUnitController", ["$scope", "$location","$http", "$routeParams", "authService", "auth", "$window", function ($scope, $location, $http, $routeParams, authService, auth, $window) 
{
    $scope.loading = true ;
    $scope.userInfo = auth;
    $scope.idbarangunit = $routeParams.idbarangunit;
    $http.get('http://api.lukisongroup.com/master/unitbarangs/'+ $scope.idbarangunit + '?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa')
    .success(function(data,status, headers, config) 
    {
        $scope.buid = data.ID;
        $scope.bukdunit = data.KD_UNIT;
        $scope.bunmunit = data.NM_UNIT;
        $scope.buqty = data.QTY;
        $scope.busize = data.SIZE;
        $scope.buweight = data.WEIGHT;
        $scope.bucolor = data.COLOR;
        $scope.bunote = data.NOTE;
        $scope.bustatus = data.STATUS;
    })

    .error(function (data, status, header, config) 
    {
        alert("Data tidak berhasil diterima");    
    })

    .finally(function()
    {
        $scope.loading = false ;
    });

    $scope.logout = function () 
    {
        
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";

    }
}]);

