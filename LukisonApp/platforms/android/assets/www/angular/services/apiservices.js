'use strict';
myAppModule.factory('apiService', ["$http","$q","$window",function($http, $q, $window)
{
	var getUrl = function()
	{
		return "http://labtest3-api.int/master";
	}

	var gettoken = function()
	{
		return "?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa";
	}
	
	var listbarangumum = function()
	{
		var deferred = $q.defer();
		var url = "http://api.lukisongroup.com/master/barangumums?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa&expand=type,kategori,unit";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response);
        })
        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}

	var listkategori = function()
	{
		var deferred = $q.defer();
		var url = "http://api.lukisongroup.com/master/kategoris?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response);
        })

        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}

	var listtipebarang = function()
	{
		var deferred = $q.defer();
		var url = "http://api.lukisongroup.com/master/tipebarangs?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response);
        })

        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}

	var listsuplier = function()
	{
		var deferred = $q.defer();
		var url = "http://api.lukisongroup.com/master/supliers?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response);
        })

        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}

	var listbarangunit = function()
	{
		var deferred = $q.defer();
		var url = "http://api.lukisongroup.com/master/unitbarangs?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response);
        })

        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}

	var listcustomer = function()
	{
		var deferred = $q.defer();
		var url = "http://labtest3-api.int/master/customers";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response);
        })

        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}

	var listdistributor = function()
	{
		var deferred = $q.defer();
		var url = "http://labtest3-api.int/master/distributors";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response);
        })

        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}
	var listparentcustomerkategoris = function()
	{
		var url = getUrl();
		
		var deferred = $q.defer();
		var url = url + "/customkategoris/search?CUST_KTG_PARENT=0";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response);
        })

        .error(function()
        {
            deferred.reject(error);
            console.log('List Customers Error');
        });

        return deferred.promise;
	}

	var listchildcustomerkategoris = function(idparent)
	{
		var url = getUrl();
		
		var deferred = $q.defer();
		var url = url + "/customkategoris/search?CUST_KTG_PARENT="+ idparent;
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response);
        })

        .error(function()
        {
            deferred.reject(error);
            console.log('List Customers Error');
        });

        return deferred.promise;
	}

	return{
			listbarangumum:listbarangumum,
			listkategori:listkategori,
			listtipebarang:listtipebarang,
			listsuplier:listsuplier,
			listbarangunit:listbarangunit,
			listcustomer:listcustomer,
			listdistributor:listdistributor,
			listparentcustomerkategoris:listparentcustomerkategoris,
			listchildcustomerkategoris:listchildcustomerkategoris
		}
}]);