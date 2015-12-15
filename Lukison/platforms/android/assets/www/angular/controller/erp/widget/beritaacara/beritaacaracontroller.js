myAppModule.controller("ListBeritaAcaraController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{

    $scope.userInfo = auth;
    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);

myAppModule.controller("NewBeritaAcaraController", ["$scope", "$location","$http", "authService", "auth","$window", function ($scope, $location, $http, authService, auth,$window) 
{

    $scope.userInfo = auth;
    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);
myAppModule.controller("DetailBeritaAcaraController", ["$scope", "$location","$http", "authService", "auth","$window","$routeParams", function ($scope, $location, $http, authService, auth,$window,$routeParams) 
{

    $scope.userInfo = auth;
    $scope.idberitaacara = $routeParams.idberitaacara;
    alert($scope.idberitaacara);
    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);




myAppModule.controller("EditBeritaAcaraController", ["$scope", "$location","$http", "authService", "auth","$window","$routeParams", function ($scope, $location, $http, authService, auth,$window,$routeParams) 
{

    $scope.userInfo = auth;
    $scope.idberitaacara = $routeParams.idberitaacara;

    alert($scope.idberitaacara);
    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);

myAppModule.controller("DeleteBeritaAcaraController", ["$scope", "$location","$http", "authService", "auth","$window","$routeParams", function ($scope, $location, $http, authService, auth,$window,$routeParams) 
{

    $scope.userInfo = auth;
    $scope.logout = function () 
    { 
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";
    }
    
}]);