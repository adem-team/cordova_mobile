'use strict';
myAppModule.controller("SpgController", ["$scope", "$location", "authService", "auth",function ($scope, $location, authService, auth) 
{
    $scope.userInfo = auth;

}]);