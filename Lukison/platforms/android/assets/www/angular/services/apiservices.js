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
	


	var listcustomer = function()
	{
		var url = getUrl();
		var deferred = $q.defer();
		var url = url + "/customers";
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

	var listgroupcustomer = function()
	{
		var url = getUrl();
		var deferred = $q.defer();
		var url = url + "/groupcusts";
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
		var url = getUrl();
		var deferred = $q.defer();
		var url = url + "/distributors";
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

	var listagenda = function(idsalesman,tanggal)
	{
		var url = getUrl();
		
		var deferred = $q.defer();
		//var url = "http://api.lukison.int/master" + "/jadwalkunjungans/search?USER_ID="+ idsalesman + "&TGL1=" + tanggal;
		var url = "http://labtest3-api.int/master" + "/jadwalkunjungans/search?USER_ID="+ idsalesman + "&TGL1=" + tanggal;
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response);
        })

        .error(function(err,status)
        {
			if (status === 404)
			{
	        	deferred.resolve([]);
	      	}
	      	else	
      		{
	        	deferred.reject(err);
	      	}
        });	

        return deferred.promise;
	}

	return{
			listcustomer:listcustomer,
			listdistributor:listdistributor,
			listparentcustomerkategoris:listparentcustomerkategoris,
			listchildcustomerkategoris:listchildcustomerkategoris,
			listgroupcustomer:listgroupcustomer,
			listagenda:listagenda
		}
}]);