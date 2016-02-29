'use strict';
myAppModule.factory('singleapiService', ["$http","$q","$window",function($http, $q, $window)
{
	var geturl = function()
	{
		return "http://labtest3-api.int/master";
	}

	var gettoken = function()
	{
		return "?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa";
	}

	var deferred = $q.defer();
	var singlelistbarangumum = function(idbarangumum)
	{
		var url = geturl();
		var idbarangumum = idbarangumum;
		var deferred = $q.defer();
		var url = url + "/barangumums/"+ idbarangumum +"?expand=type,kategori,unit";
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
		var url = geturl();
		var idkategori = idkategori;
		var deferred = $q.defer();
		var url = url + "/kategoris/"+ idkategori;
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
		var url = geturl();
		var idtipebarang = idtipebarang;
		var deferred = $q.defer();
		var url = url + "/tipebarangs/"+ idtipebarang;
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
		var url = geturl();
		var idsuplier = idsuplier;
		var deferred = $q.defer();
		var url = url + "/supliers/"+ idsuplier;
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
		var url = geturl();
		var idbarangunit = idbarangunit;
		var deferred = $q.defer();
		var url = url + "/unitbarangs/"+ idbarangunit;
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
		var url = geturl();
		var deferred = $q.defer();
		var url = url + "/customers/"+ idcustomer;
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

	var singlelistgroupcustomer = function(groupcustomer)
	{
		var url = geturl();
		var deferred = $q.defer();
		//var url = "http://api.lukison.int/master" + "/customers/search?SCDL_GROUP="+ groupcustomer;
		var url = "http://labtest3-api.int/master" + "/customers/search?SCDL_GROUP="+ groupcustomer;
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

	var detailkunjungan = function(iduser,idcustomer,tanggal)
	{
		var url = geturl();
		var deferred = $q.defer();
		//var url = "http://api.lukison.int/master/detailkunjungans/search?USER_ID="+ iduser + "&CUST_ID=" + idcustomer +"&TGL=" + tanggal;
		var url = "http://labtest3-api.int/master/detailkunjungans/search?USER_ID="+ iduser + "&CUST_ID=" + idcustomer +"&TGL=" + tanggal;
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
			singlelistbarangumum:singlelistbarangumum,
			singlelistkategori:singlelistkategori,
			singlelisttipebarang:singlelisttipebarang,
			singlelistsuplier:singlelistsuplier,
			singlelistbarangunit:singlelistbarangunit,
			singlelistcustomer:singlelistcustomer,
			singlelistgroupcustomer:singlelistgroupcustomer,
			detailkunjungan:detailkunjungan
		}
}]);