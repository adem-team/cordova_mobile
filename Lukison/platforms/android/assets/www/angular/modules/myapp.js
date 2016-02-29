'use strict';
var myAppModule 	= angular.module('myAppModule',
								['ngRoute','ngResource','ngToast','angularSpinner','ui.bootstrap','ngAnimate',
                                    'ui.select2','naif.base64','monospaced.qrcode','angular-ladda',
                                 'ngCordova','ngMap','mm.acl','ng-mfb','ngMaterial','ngMessages','hSweetAlert','ui.calendar']);
myAppModule.run(["$rootScope", "$location","uiSelect2Config", 
function ($rootScope, $location,uiSelect2Config) 
{
    uiSelect2Config.placeholder = "Placeholder text";
    $rootScope.$on("$routeChangeSuccess", function (userInfo) 
    {
        // console.log(userInfo);
    });
   
    $rootScope.$on("$routeChangeSuccess", function (userInfo) 
    {
        // console.log(userInfo);
    });

    $rootScope.$on("$routeChangeError", function (event, current, previous, eventObj) 
    {
        if (eventObj.authenticated === false) 
        {
            $location.path("/login");
        }
    });
}]);

myAppModule.config(['ngToastProvider', function(ngToastProvider) 
{
      ngToastProvider.configure(
      {
            animation: 'slide', // or 'fade',
            className: 'success',
            dismissButton: true,
            dismissButtonHtml:'&times;',
            compileContent: true,
            timeout:1000,
            horizontalPosition:'right',     //left, center
            verticalPosition:   'bottom',  //top,center
            maxNumber: 3 // 0 for unlimited
      });
      
}]);




