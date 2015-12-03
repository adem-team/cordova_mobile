'use strict';
myAppModule.controller("SpgController", ["$scope", "$location", "authService", "auth",function ($scope, $location, authService, auth) 
{
    $scope.userInfo = auth;
    
    $scope.logout = function () 
    {
        
        $scope.userInfo = null;
        $window.sessionStorage.clear();
        window.location.href = "index.html";

    }
}]);