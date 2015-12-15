myAppModule.controller("ListPurchaseOrderController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{

    $scope.userInfo = auth;
    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);

myAppModule.controller("NewPurchaseOrderController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{

    $scope.userInfo = auth;
    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);
myAppModule.controller("DetailPurchaseOrderController", ["$scope", "$location","$http", "authService", "auth","$window","$routeParams", function ($scope, $location, $http, authService, auth,$window,$routeParams) 
{

    $scope.userInfo = auth;
    $scope.idpurchaseorder = $routeParams.idpurchaseorder;
    alert($scope.idpurchaseorder);
    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);




myAppModule.controller("EditPurchaseOrderController", ["$scope", "$location","$http", "authService", "auth","$window","$routeParams", function ($scope, $location, $http, authService, auth,$window,$routeParams) 
{

    $scope.userInfo = auth;
    $scope.idpurchaseorder = $routeParams.idpurchaseorder;

    alert($scope.idpurchaseorder);
    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);

myAppModule.controller("DeletePurchaseOrderController", ["$scope", "$location","$http", "authService", "auth","$window","$routeParams", function ($scope, $location, $http, authService, auth,$window,$routeParams) 
{

    $scope.userInfo = auth;
    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);