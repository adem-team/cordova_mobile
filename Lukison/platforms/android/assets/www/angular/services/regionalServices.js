'use strict';
myAppModule.factory('regionalService', ["$http","$q","$window",function($http, $q, $window)
{
	var getUrl = function()
	{
		return "http://api.lukison.int/master";
	}

	var gettoken = function()
	{
		return "?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa";
	}

	var listpropinsi = function()
	{
		url = getUrl();
		var deferred = $q.defer();
		var url = url + "/provinsis";
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
	var listkabupaten = function()
	{
		var deferred = $q.defer();
		var url = "angular/json/kabupaten.json";
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

	var singlelistkabupaten = function(idprovinsi)
	{
		var url = getUrl();
		
		var deferred = $q.defer();
		var url = url + "/kabupatens/search?PROVINCE_ID=" + idprovinsi;
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response);
        })

        .error(function()
        {
            deferred.reject(error);
            console.log('List Kabupaten Error');
        });

        return deferred.promise;
	}

	return{
			listpropinsi:listpropinsi,
			listkabupaten:listkabupaten,
			singlelistkabupaten:singlelistkabupaten
		}
}]);