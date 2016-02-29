myAppModule.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}]);


myAppModule.factory('LocationService', function ($q) {

var currentLocation = {
    latitude: "",
    longitude: ""
}
  var pos = {timeout: 10000, enableHighAccuracy: false};


    var GetLocation = function () 
    {
        var d = $q.defer();
        navigator.geolocation.getCurrentPosition(
        function (pos) 
        {
            currentLocation.latitude = pos.coords.latitude;
            currentLocation.longitude = pos.coords.longitude;
            d.resolve(currentLocation);
        },
        function(err)
        {
          alert("GPS Tidak Hidup");
        });
        
        return d.promise
    }


  return {
            GetLocation:GetLocation
        }

});