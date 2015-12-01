module.controller("HomeController", function($scope,$http) 
{
   $http.get('http://localhost/sym/ecommerce/web/app_dev.php/api/listproduct')
        .success(function(data,status, headers, config) 
        {
            $scope.products = data.productlist;
        })
        .error(function (data, status, header, config) 
        {
                
        });
});

module.controller("TipsController", function($scope,$http) 
{
	$http.get('http://localhost/sym/ecommerce/web/app_dev.php/api/listbrand')
        .success(function(data,status, headers, config) 
        {
            $scope.brands = data.brandlist;
        });
});

module.controller("SettingController", function($scope,$http) 
{
	$http.get('http://localhost/sym/ecommerce/web/app_dev.php/api/listcategory')
        .success(function(data,status, headers, config) 
        {
            $scope.kategoris = data.categorylist ;
        })
        .error(function (data, status, header, config) 
        {
                
        });
});


module.controller("TipsController", function($scope,$http) 
{
	$http.get('http://localhost/sym/ecommerce/web/app_dev.php/api/listvariant')
        .success(function(data,status, headers, config) 
        {
            $scope.variants = data.variantlist ;
        })
        .error(function (data, status, header, config) 
        {
                
        });
});

module.controller("FaqController", function($scope,$http) 
{
	$http.get('http://localhost/sym/ecommerce/web/app_dev.php/api/listbank')
        .success(function(data,status, headers, config) 
        {
            $scope.banks = data.banklist ;
        })

        .error(function (data, status, header, config) 
        {
                
        });
});