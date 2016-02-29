/* global myAppModule */
/* global angular */
'use strict';
myAppModule.controller("LoginController", ["$scope", "$location", "$window", "authService",function ($scope, $location, $window, authService) 
{
    	
        $scope.userInfo = null;
	    $scope.login = function (user) 
	    {
            $scope.loginLoading = true;
            $scope.disableInput = true;
            $scope.user = angular.copy(user);
	    	var username = $scope.user.username;
	    	var password	= $scope.user.password;
	    	authService.login(username, password)
            .then(function (result) 
            {
                console.log(result);
                $scope.userInfo = result;
                var rulename = result.rulename;
                if(rulename == 'SALESMAN')
                {
                	$location.path('/home');
                }

                if(rulename == 'SALES_PROMOTION')
                {
                	$location.path('/spg');
                }
                $scope.loading = false;
                
            }, 
            function (err) 
            {          
                sweetAlert("Oops...", "Username Or Password Wrong", "error");
                $scope.loginLoading = false;
                $scope.disableInput=false;
                $scope.user.username="";
                $scope.user.password="";  
            });

	    }
}]);
