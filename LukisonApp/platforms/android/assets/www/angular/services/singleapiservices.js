'use strict';
myAppModule.factory('singleapiService', ["$http","$q","$window",function($http, $q, $window)
{
	var deferred = $q.defer();
	var singlelistbarangumum = function(idbarangumum)
	{
		var idbarangumum = idbarangumum;
		var deferred = $q.defer();
		var url = "http://api.lukisongroup.com/master/barangumums/"+ idbarangumum +"?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa&expand=type,kategori,unit";
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

	var singlelistkategori = function(idkategori)
	{
		var idkategori = idkategori;
		var deferred = $q.defer();
		var url = "http://api.lukisongroup.com/master/kategoris/"+ idkategori +"?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa";
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

	var singlelisttipebarang = function(idtipebarang)
	{
		var idtipebarang = idtipebarang;
		var deferred = $q.defer();
		var url = "http://api.lukisongroup.com/master/tipebarangs/"+ idtipebarang +"?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa";
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

	var singlelistsuplier = function(idsuplier)
	{
		var idsuplier = idsuplier;
		var deferred = $q.defer();
		var url = "http://api.lukisongroup.com/master/supliers/"+ idsuplier +"?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa";
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

	var singlelistbarangunit = function(idbarangunit)
	{
		var idbarangunit = idbarangunit;
		var deferred = $q.defer();
		var url = "http://api.lukisongroup.com/master/unitbarangs/"+ idbarangunit +"?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa";
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

	var singlelistcustomer = function(idcustomer)
	{
		var deferred = $q.defer();
		var url = "http://lukison.int/master/customers/"+ idcustomer;
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
	return{
			singlelistbarangumum:singlelistbarangumum,
			singlelistkategori:singlelistkategori,
			singlelisttipebarang:singlelisttipebarang,
			singlelistsuplier:singlelistsuplier,
			singlelistbarangunit:singlelistbarangunit,
			singlelistcustomer:singlelistcustomer
		}
}]);